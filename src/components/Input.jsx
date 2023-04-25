const Input = ({ name, value, type, placeholder, errors, onChange, onBlur, autoFocus }) => {
  return (
    <div>
      <input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        required
        className='inscription--input'
        autoFocus={autoFocus}
      />
      {{ errors } && <p style={{ margin: '0', position: 'absolute', color: '#e73f46' }}>{errors}</p>}
    </div>
  )
}

export default Input
