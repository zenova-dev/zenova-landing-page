"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={cn("relative", className)}>
        {/* Timeline connector line */}
        <div className="absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 via-blue-400 to-pink-400 opacity-30" />

        {/* Timeline items container */}
        <div className="grid grid-cols-4 gap-8 relative">
          {children}
        </div>
      </div>
    );
  }
);
Timeline.displayName = "Timeline";

interface TimelineItemProps {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  number: number;
  color: string;
  accentColor: string;
  isLast?: boolean;
  className?: string;
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  (
    {
      title,
      description,
      icon: Icon,
      number,
      color,
      accentColor,
      isLast = false,
      className,
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn("relative", className)}>
        {/* Step number badge */}
        <div className="flex justify-center mb-6">
          <div
            className={cn(
              "w-20 h-20 rounded-full bg-gradient-to-br flex items-center justify-center shadow-lg relative z-10 transition-transform duration-300 hover:scale-110",
              color
            )}
          >
            <div className="absolute inset-0 bg-gray-900 rounded-full m-2 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">{number}</span>
            </div>
          </div>
        </div>

        {/* Card */}
        <div
          className={cn(
            "bg-gray-800/50 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:bg-gray-800 hover:shadow-xl group",
            accentColor
          )}
        >
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div
              className={cn(
                "w-14 h-14 rounded-full bg-gradient-to-br flex items-center justify-center",
                color
              )}
            >
              <Icon className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-white text-lg font-bold mb-3 text-center">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed text-center">
            {description}
          </p>
        </div>

        {/* Arrow between steps */}
        {!isLast && (
          <div className="absolute top-10 -right-4 transform -translate-y-1/2 z-20">
            <svg
              className="w-8 h-8 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        )}
      </div>
    );
  }
);
TimelineItem.displayName = "TimelineItem";

export { Timeline, TimelineItem };
