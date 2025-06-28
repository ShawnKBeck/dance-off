'use client'
import { ReactLenis } from 'lenis/react'
import { useTransform, motion, useScroll, MotionValue } from 'motion/react'
import { useRef } from 'react'

interface RuleData {
  number: number
  title: string
  description: string
  color: string
}

interface RuleCardProps {
  i: number
  number: number
  title: string
  description: string
  color: string
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
}

const RuleCard = ({
  i,
  number,
  title,
  description,
  color,
  progress,
  range,
  targetScale,
}: RuleCardProps) => {
  const container = useRef(null)
  const iconContainer = useRef(null)

  const { scrollYProgress: iconProgress } = useScroll({
    target: iconContainer,
    offset: ['start center', 'end center'],
  })

  const iconScale = useTransform(iconProgress, [0, 1], [1, 1.5])
  const scale = useTransform(progress, range, [1, targetScale])

  const getDanceIcon = (ruleNumber: number) => {
    const icons = {
      1: '💃', // Dancing woman for "you are served"
      2: '🪩', // Disco ball for "it's on" - the party/battle begins
      3: '🩰', // Ballet shoes for dance instructor - professional training
      4: '🕺🏾', // Dancing man for "bring it" - show your moves
      5: '🏆', // Trophy for judges decide - the winner
    }
    return icons[ruleNumber as keyof typeof icons] || '💃'
  }

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 px-4"
    >
      <motion.div
        style={{
          background: color,
          scale,
          top: `calc(-5vh + ${i * 15}px)`,
        }}
        className="flex flex-col relative h-[400px] md:h-[450px] w-[90%] md:w-[70%] max-w-4xl rounded-xl p-6 md:p-10 origin-top shadow-2xl"
      >
        <div className="relative mb-4 md:mb-6">
          <div className="absolute top-0 left-0 bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
            <span className="text-lg md:text-2xl font-bold text-white">
              {number}
            </span>
          </div>
          <h2 className="text-xl md:text-3xl font-bold text-white font-poppins text-center">
            {title}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row h-full gap-4 md:gap-10 items-center">
          <div className="w-full md:w-[60%] text-center md:text-left">
            <p className="text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed md:leading-loose font-medium">
              {description}
            </p>
          </div>

          <div
            ref={iconContainer}
            className="relative w-full md:w-[40%] h-24 md:h-full rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.div
              className="flex items-center justify-center"
              style={{ scale: iconScale }}
            >
              <span className="text-5xl md:text-8xl">
                {getDanceIcon(number)}
              </span>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center mt-4 md:mt-6">
          <div className="flex space-x-1 md:space-x-2">
            {Array.from({ length: 5 }, (_, index) => (
              <div
                key={index}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                  index === i ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function DanceRulesStackingCards() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const rules: RuleData[] = [
    {
      number: 1,
      title: 'You Are Served',
      description:
        "When a team challenges you to a dance battle, you have officially been 'served'. This is the formal initiation of a dance challenge that cannot be ignored.",
      color: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
    },
    {
      number: 2,
      title: "It's On",
      description:
        "Once served, the battle is automatically 'on'. There's no backing down from a challenge - refusing to accept means automatic defeat and public shame.",
      color: 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)',
    },
    {
      number: 3,
      title: 'Dance Instructor',
      description:
        'Each team receives coaching from a professional Dance Dimensions instructor who will help choreograph and perfect their routine.',
      color: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
    },
    {
      number: 4,
      title: 'Bring It',
      description:
        "The challenged team must 'bring it' with their best dance moves and attitude. This is your chance to respond and prove your dance superiority.",
      color: 'linear-gradient(135deg, #d946ef 0%, #7c3aed 100%)',
    },
    {
      number: 5,
      title: 'Judges Decide',
      description:
        'Impartial judges declare the winner based on style, originality, and attitude. Their decision is final and binding.',
      color: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
    },
  ]

  return (
    <ReactLenis root>
      <main
        ref={container}
        className="relative bg-gradient-to-br from-purple-800 to-purple-900"
      >
        {/* Background Pattern */}
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#8b5cf620_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf620_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Header Section */}
        <section className="pt-12 md:pt-16 pb-8 md:pb-12 flex items-center justify-center relative z-10">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold font-poppins mb-4 md:mb-6 drop-shadow-lg">
              How It Works
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-6 md:mb-8 text-white/80">
              The official rules of our dance-off competition. Scroll down to
              explore! 👇
            </p>
          </div>
        </section>

        {/* Stacking Cards */}
        <section className="text-white w-full">
          {rules.map((rule, i) => {
            const targetScale = 1 - (rules.length - i) * 0.05
            return (
              <RuleCard
                key={`rule_${i}`}
                i={i}
                number={rule.number}
                title={rule.title}
                color={rule.color}
                description={rule.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            )
          })}
        </section>

        {/* Bottom spacing */}
        <div className="h-20"></div>
      </main>
    </ReactLenis>
  )
}
