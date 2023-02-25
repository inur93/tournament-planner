type Props = { horizontal?: boolean; spacing: number }

const Spacer = ({ horizontal, spacing }: Props) => {
  return (
    <div
      style={{
        width: horizontal ? `${spacing}rem` : 0,
        height: horizontal ? 0 : `${spacing}rem`
      }}
    ></div>
  )
}

export default Spacer
