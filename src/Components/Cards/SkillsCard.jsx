import React, { useEffect, useRef, useState } from "react"

export default function SkillsCard({ tittle, tech, additional }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return (
    <div className="py-5 px-4 w-[80%] lg:w-sm bg-white shadow-md rounded-2xl hover:scale-110 duration-300 ease-in-out">
      <p className="text-blue-500 font-semibold text-xl w-full mb-5">
        {tittle}
      </p>
      <div ref={ref}>
        {tech.map((t, index) => (
          <div key={index} className="w-full mb-3">
            <div className="flex justify-between w-full mb-2">
              <p>{t.name}</p>
              <p>{t.percent}%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-blue-500 h-2 text-center text-white font-bold transition-all duration-2000 ease-in-out"
                style={{
                  width: visible ? `${t.percent}%` : "0%",
                  transitionDelay: `${index * 150}ms`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      {additional && (
        <>
          <p className="mb-2 mt-8 font-semibold">Additional Skills:</p>
          <div className="flex gap-3 flex-wrap">
            {additional.map((add, index) => (
              <div key={index} className="bg-gray-100 py-1 px-3 rounded-full">
                <p>{add}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
