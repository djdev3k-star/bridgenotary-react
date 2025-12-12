/**
 * RON Service - Frontend
 * Handles communication with the backend RON API
 */

const API_BASE_URL = import.meta.env.VITE_API_URL;

interface StartRONParams {
  signerName: string;
  signerEmail: string;
  signerPhone?: string;
  transactionName?: string;
}

interface StartRONResponse {
  success: boolean;
  transactionId?: string;
  signerUrl?: string;
  message?: string;
  error?: string;
  details?: string;
}

interface RONTransaction {
  id: string;
  status: string;
  signerName: string;
  signerEmail: string;
  signerPhone?: string;
  transactionName?: string;
  documents?: Array<{ name: string; url: string }>;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: any; // For any additional backend fields
}

interface TransactionResponse {
  success: boolean;
  transaction?: RONTransaction;
  error?: string;
  details?: string;
}

class RONService {
  /**
   * Start a new RON transaction
   * @param params - Signer information
   * @returns Promise with transaction details including signer URL
   */
  async startRON(params: StartRONParams): Promise<StartRONResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/ron/start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to start RON transaction');
      }

      return data;
    } catch (error) {
      console.error('Error starting RON:', error);
      throw error;
    }
  }

  /**
   * Get transaction status
   * @param transactionId - Transaction ID
   * @returns Promise with transaction details
   */
  async getTransaction(transactionId: string): Promise<TransactionResponse> {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/ron/transaction/${transactionId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch transaction');
      }

      return data;
    } catch (error) {
      console.error('Error fetching transaction:', error);
      throw error;
    }
  }

  /**
   * Add documents to a transaction
   * @param transactionId - Transaction ID
   * @param documents - Array of documents to add
   * @returns Promise with updated transaction
   */
  async addDocuments(
    transactionId: string,
    documents: Array<{ name: string; url: string }>
  ): Promise<TransactionResponse> {
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/ron/transaction/${transactionId}/documents`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ documents }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to add documents');
      }

      return data;
    } catch (error) {
      console.error('Error adding documents:', error);
      throw error;
    }
  }
}

export default new RONService();
