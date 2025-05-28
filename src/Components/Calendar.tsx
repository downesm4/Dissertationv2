import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ChevronLeft, ChevronRight } from "lucide-react"

const Calendar = () => {

    const today = new Date()
    const [currentMonth, setCurrentMonth] = useState(today.getMonth()) // use today's month as the default
    const [currentYear, setCurrentYear] = useState(today.getFullYear()) // use today's year as the default

    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]

    const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"]

    //Calculate the number of days in the month 
    const DaysInMonth = (month: number, year: number) => {
        return new Date(year, month + 1, 0).getDate() // returns the number of days in a month 
    }

    // 
    const FirstDayOfMonth = (month: number, year: number) => {
        const day = new Date(year, month, 1).getDay() //get an object with the first day of the month
        return day === 0 ? 6 : day - 1 // convert to day where monday =0 not sunday 
    }

    // Get the previous Month 
    const PrevMonth = () => {
        // If current month is first month then set current month to last month of year before
        if (currentMonth === 0) {
            setCurrentMonth(11)
            setCurrentYear(currentYear - 1)
        } else {
            // remove a month 
            setCurrentMonth(currentMonth - 1)
        }
    }

    // Get the next month
    const NextMonth = () => {
        // If current Month is last then set to first month and add a year
        if (currentMonth === 11) {
            setCurrentMonth(0)
            setCurrentYear(currentYear + 1)
        } else {
            // If not the last month then add an additional month 
            setCurrentMonth(currentMonth + 1)
        }
    }

    const renderCalendarDays = () => {
        const daysInMonth = DaysInMonth(currentMonth, currentYear)
        const firstDayOfMonth = FirstDayOfMonth(currentMonth, currentYear)

        const days: React.ReactNode[] = []

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="h-10 flex items-center justify-center"></div>)
        }

        // Add cells for each day of the month
        for (let day = 1; day <= daysInMonth; day++) {

            const isToday =
                day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear() // check if today

            days.push(
                <div key={day} className={twMerge("h-10 flex items-center justify-center text-red-950 font-bold text-xl",
                    isToday ? "rounded-full border-[0.2vw] border-pink-500 bg-rose-200" : "")}> {/* additional formatting to highlight current day*/}
                    {day}
                </div>,
            )
        }

        return days
    }

    return (
        <div className="bg-rose-100 rounded-3xl h-[450px] border-[0.75vw] border-pink-500 p-6 max-w-md mx-3">
            <div className="flex justify-between items-center mb-6">
                <button onClick={PrevMonth} className="text-red-950 p-2 rounded-full">
                    <ChevronLeft size={24} />
                </button>
                <h2 className="text-red-950 text-3xl font-bold">{months[currentMonth]}</h2>
                <button onClick={NextMonth} className="text-red-950 p-2 rounded-full">
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className="grid grid-cols-7 gap-2">
                {daysOfWeek.map((day) => (
                    <div key={day} className="h-8 flex items-center justify-center text-red-950 font-bold">
                        {day}
                    </div>
                ))}
                {renderCalendarDays()}
            </div>
        </div>
    )
}


export default Calendar;