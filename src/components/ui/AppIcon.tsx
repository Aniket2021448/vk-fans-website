'use client';

import React from 'react';
import {
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
    XMarkIcon,
    Bars3Icon,
    CheckCircleIcon,
    ChevronDownIcon,
    ArrowRightIcon,
    ChatBubbleLeftRightIcon,
    ExclamationTriangleIcon,
    ChevronRightIcon,
    BoltIcon,
    SignalIcon,
    SparklesIcon,
    EyeIcon,
    CheckIcon,
    ScaleIcon,
    SpeakerWaveIcon,
    ArrowPathIcon,
    DocumentArrowDownIcon,
    VideoCameraIcon,
    DocumentTextIcon,
    StarIcon,
    ChevronLeftIcon,
    PlusIcon,
    MinusIcon,
    InformationCircleIcon,
    SpeakerXMarkIcon,
    AdjustmentsHorizontalIcon,
    Squares2X2Icon,
    ListBulletIcon,
    QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

type IconVariant = 'outline' | 'solid';

interface IconProps {
    name: string; // dynamic icon name from a curated set
    variant?: IconVariant;
    size?: number;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    [key: string]: any;
}

const ICONS_OUTLINE: Record<string, React.ComponentType<any>> = {
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
    XMarkIcon,
    Bars3Icon,
    CheckCircleIcon,
    ChevronDownIcon,
    ArrowRightIcon,
    ChatBubbleLeftRightIcon,
    ExclamationTriangleIcon,
    ChevronRightIcon,
    BoltIcon,
    SignalIcon,
    SparklesIcon,
    EyeIcon,
    CheckIcon,
    ScaleIcon,
    SpeakerWaveIcon,
    ArrowPathIcon,
    // alias common naming to actual icon
    DocumentArrowDownIcon,
    VideoCameraIcon,
    DocumentTextIcon,
    StarIcon,
    ChevronLeftIcon,
    PlusIcon,
    MinusIcon,
    InformationCircleIcon,
    SpeakerXMarkIcon,
    AdjustmentsHorizontalIcon,
    Squares2X2Icon,
    ListBulletIcon,
};

const ICONS_SOLID: Record<string, React.ComponentType<any>> = {
    StarIcon: StarIconSolid,
};

function Icon({
    name,
    variant = 'outline',
    size = 24,
    className = '',
    onClick,
    disabled = false,
    ...props
}: IconProps) {
    const iconSet = variant === 'solid' ? ICONS_SOLID : ICONS_OUTLINE;
    // Support alias: map 'DocumentDownloadIcon' to DocumentArrowDownIcon
    const normalizedName = name === 'DocumentDownloadIcon' ? 'DocumentArrowDownIcon' : name;
    const IconComponent = iconSet[normalizedName];

    if (!IconComponent) {
        return (
            <QuestionMarkCircleIcon
                width={size}
                height={size}
                className={`text-gray-400 ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
                onClick={disabled ? undefined : onClick}
                {...props}
            />
        );
    }

        return (
            <IconComponent
                width={size}
                height={size}
                className={`${disabled ? 'opacity-50 cursor-not-allowed' : onClick ? 'cursor-pointer hover:opacity-80' : ''} ${className}`}
                onClick={disabled ? undefined : onClick}
                {...props}
            />
        );
}

export default Icon; 