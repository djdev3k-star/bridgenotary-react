/**
 * Proof API Service
 * Handles all interactions with the Proof API for RON transactions
 */

import config from '../config/env.js';

class ProofService {
  constructor() {
    this.baseUrl = config.proof.environment === 'production' 
      ? 'https://api.notarize.proof.com'
      : 'https://api-fairfax.notarize.proof.com';
    this.apiKey = config.proof.apiKey;
  }

  /**
   * Create a new RON transaction
   * @param {Object} transactionData - Transaction configuration
   * @param {string} transactionData.signerName - Name of the signer
   * @param {string} transactionData.signerEmail - Email of the signer
   * @param {string} [transactionData.signerPhone] - Phone number of the signer
   * @param {string} [transactionData.transactionName] - Custom name for the transaction
   * @param {boolean} [transactionData.draftSign] - Whether to create as draft for document upload
   * @returns {Promise<Object>} Transaction response with signer URL
   */
  async createTransaction(transactionData) {
    const {
      signerName,
      signerEmail,
      signerPhone,
      transactionName = `RON Transaction - ${new Date().toISOString()}`,
      draftSign = true, // true allows document upload after creation
    } = transactionData;

    const requestBody = {
      name: transactionName,
      draft_sign: draftSign,
      participants: [
        {
          email: signerEmail,
          name: signerName,
          ...(signerPhone && { phone: signerPhone }),
          role: 'signer',
        },
      ],
    };

    try {
      const response = await fetch(`${this.baseUrl}/v1/transactions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ApiKey': this.apiKey,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          `Proof API error: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`
        );
      }

      const transaction = await response.json();
      
      // Extract the signer URL from the transaction response
      // The URL structure may vary; adjust based on Proof's actual response
      const signerUrl = this.extractSignerUrl(transaction);

      return {
        transactionId: transaction.id,
        signerUrl,
        status: transaction.status,
        transaction,
      };
    } catch (error) {
      console.error('Error creating Proof transaction:', error);
      throw error;
    }
  }

  /**
   * Extract signer URL from transaction response
   * @param {Object} transaction - Transaction object from Proof API
   * @returns {string} Signer URL
   */
  extractSignerUrl(transaction) {
    // Based on Proof API documentation, the signer URL might be at:
    // - transaction.participants[0].url
    // - transaction.signing_url
    // - transaction.url
    // Adjust based on actual API response structure
    
    if (transaction.participants && transaction.participants[0]?.url) {
      return transaction.participants[0].url;
    }
    
    if (transaction.signing_url) {
      return transaction.signing_url;
    }
    
    if (transaction.url) {
      return transaction.url;
    }

    // If no direct URL, construct it based on transaction ID
    // This is a fallback; verify with Proof API docs
    return `https://app.notarize.proof.com/transaction/${transaction.id}`;
  }

  /**
   * Add documents to an existing transaction
   * @param {string} transactionId - Transaction ID
   * @param {Array<Object>} documents - Array of document objects
   * @returns {Promise<Object>} Updated transaction
   */
  async addDocuments(transactionId, documents) {
    try {
      const response = await fetch(
        `${this.baseUrl}/v1/transactions/${transactionId}/documents`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'ApiKey': this.apiKey,
          },
          body: JSON.stringify({ documents }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          `Proof API error: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error('Error adding documents to transaction:', error);
      throw error;
    }
  }

  /**
   * Get transaction status
   * @param {string} transactionId - Transaction ID
   * @returns {Promise<Object>} Transaction details
   */
  async getTransaction(transactionId) {
    try {
      const response = await fetch(
        `${this.baseUrl}/v1/transactions/${transactionId}`,
        {
          method: 'GET',
          headers: {
            'ApiKey': this.apiKey,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          `Proof API error: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching transaction:', error);
      throw error;
    }
  }

  /**
   * Download completed transaction documents
   * @param {string} transactionId - Transaction ID
   * @returns {Promise<Buffer>} Document buffer
   */
  async downloadDocuments(transactionId) {
    try {
      const response = await fetch(
        `${this.baseUrl}/v1/transactions/${transactionId}/documents/download`,
        {
          method: 'GET',
          headers: {
            'ApiKey': this.apiKey,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to download documents: ${response.statusText}`);
      }

      return await response.arrayBuffer();
    } catch (error) {
      console.error('Error downloading documents:', error);
      throw error;
    }
  }
}

export default new ProofService();
