import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from './shared/LoadingSpinner';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface DateSlots {
  [key: string]: TimeSlot[];
}

const SchedulePage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [availableSlots, setAvailableSlots] = useState<DateSlots>({});

  // Simulate loading available time slots
  React.useEffect(() => {
    const fetchAvailableSlots = async () => {
      setIsLoading(true);
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data
      const mockSlots: DateSlots = {
        '2025-08-21': [
          { time: '09:00 AM', available: true },
          { time: '10:00 AM', available: true },
          { time: '11:00 AM', available: false },
        ],
        '2025-08-22': [
          { time: '09:00 AM', available: true },
          { time: '10:00 AM', available: false },
          { time: '11:00 AM', available: true },
        ],
      };
      
      setAvailableSlots(mockSlots);
      setIsLoading(false);
    };

    fetchAvailableSlots();
  }, []);

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTime('');
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  return (
    <div className="w-full bg-white text-neutral-900 pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-proof mb-8">Schedule Your Notarization</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Date Selection */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Select a Date</h2>
            <div className="space-y-2">
              {Object.keys(availableSlots).map(date => (
                <button
                  key={date}
                  onClick={() => handleDateSelect(date)}
                  className={`w-full p-4 text-left rounded-lg border ${
                    selectedDate === date
                      ? 'border-proof bg-proof/5 text-proof'
                      : 'border-gray-200 hover:border-proof/50'
                  }`}
                >
                  {new Date(date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                  })}
                </button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Select a Time</h2>
            {selectedDate ? (
              <div className="grid grid-cols-2 gap-2">
                {availableSlots[selectedDate].map(({ time, available }) => (
                  <button
                    key={time}
                    onClick={() => available && handleTimeSelect(time)}
                    disabled={!available}
                    className={`p-4 rounded-lg border ${
                      selectedTime === time
                        ? 'border-proof bg-proof/5 text-proof'
                        : available
                        ? 'border-gray-200 hover:border-proof/50'
                        : 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-neutral-600">Please select a date first</p>
            )}
          </div>
        </div>

        {/* Continue Button */}
        {selectedDate && selectedTime && (
          <div className="mt-8 flex justify-end">
            <Link
              to="/book"
              className="button-primary text-lg py-4 px-8"
              state={{ date: selectedDate, time: selectedTime }}
            >
              Continue to Booking
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchedulePage;
