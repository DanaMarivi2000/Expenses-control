
type ErrorProps={
    children:React.ReactNode
}

const Error = ({children}:ErrorProps) => {
  return (
    <div className="bg-[#ef233c] text-white text-center uppercase font-bold">
      {children}
    </div>
  )
}

export default Error
