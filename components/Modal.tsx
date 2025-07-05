
import React, { useState, useEffect } from 'react';
import { Campaign } from '../types';
import { CloseIcon } from './Icons';

interface ModalProps {
  campaign: Campaign;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ campaign, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 200); // Animation duration
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${isClosing ? 'modal-leave' : 'modal-enter'}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className={`bg-dark-gray rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden ${isClosing ? 'modal-content-leave' : 'modal-content-enter'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full md:w-2/3 bg-black flex items-center justify-center">
          <img src={campaign.imageSrc} alt={campaign.title} className="w-full h-full object-contain" />
        </div>
        <div className="w-full md:w-1/3 p-6 flex flex-col overflow-y-auto">
          <div className="flex justify-between items-start mb-4">
             <h2 id="modal-title" className="text-2xl font-bold text-lightest-slate">{campaign.title}</h2>
             <button onClick={handleClose} className="text-slate hover:text-teal transition-colors duration-300 p-1 -mr-2 -mt-2" aria-label="Close modal">
                <CloseIcon className="w-7 h-7" />
            </button>
          </div>
          <p className="text-slate mb-6 text-sm">{campaign.description}</p>
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-light-slate mb-3 border-b border-gray/30 pb-2">Key Metrics</h3>
            <ul className="space-y-2">
              {campaign.metrics.map((metric, index) => (
                <li key={index} className="flex justify-between items-center text-sm bg-black/70 p-2.5 rounded-md">
                  <span className="text-slate">{metric.label}:</span>
                  <span className="font-bold text-teal">{metric.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;