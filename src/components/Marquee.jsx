import { Palette, Megaphone, LayoutTemplate, Compass, TrendingUp } from 'lucide-react'

const TAGS = [
  { icon: Palette, label: 'Brand identity' },
  { icon: Megaphone, label: 'Social media design' },
  { icon: LayoutTemplate, label: 'Web development' },
  { icon: Compass, label: 'Positioning' },
  { icon: TrendingUp, label: 'Customer acquisition' }
]

export default function Marquee() {
  const row = [...TAGS, ...TAGS]
  return (
    <div className="strip" aria-label="What I do">
      <div className="track">
        {row.map(({ icon: Icon, label }, i) => (
          <span className="tag" key={i}>
            <Icon size={18} />
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
