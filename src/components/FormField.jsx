export default function FormField({
  id,
  label,
  type = 'text',
  as = 'input',
  required = false,
  options = [],
  ...props
}) {
  const describedBy = `${id}-label`

  return (
    <div className="form-field">
      <label id={describedBy} htmlFor={id}>
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {as === 'textarea' ? (
        <textarea id={id} name={id} required={required} {...props} />
      ) : as === 'select' ? (
        <select id={id} name={id} required={required} defaultValue="" {...props}>
          <option value="" disabled>
            Select
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input id={id} name={id} type={type} required={required} {...props} />
      )}
    </div>
  )
}
