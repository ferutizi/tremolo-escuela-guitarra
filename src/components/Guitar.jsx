import './Guitar.scss'

const Guitar = ({ submitted }) => {
  return (
    <div className='guitar--container'>
      <div className='guitar--reference'>
        <img
          className={`inscription--guitar__l close--${submitted}__l`}
          src={require('../images/guitar_l_c.png')} alt='guitarra parte izquierda'
        />
        <img
          className={`inscription--guitar__r close--${submitted}__r`}
          src={require('../images/guitar_r_c.png')} alt='guitarra parte derecha'
        />
      </div>
    </div>
  )
}

export default Guitar
