import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
const StartButton = ({ favorite, onClick }) => {
    return (
        <button onClick={onClick}>
            <StarIcon
                className={`w-4 h-4 ${
                    (favorite && 'text-yellow-500') || 'text-black'
                } `}
            />
        </button>
    );
};

export { StartButton };
