

const BoxCard = ({type, children}) => {
  return (
    <div className={`box ${type}`}>
      {children}
    </div>
  )
}

export default BoxCard
