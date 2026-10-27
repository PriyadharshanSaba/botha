import type { FieldSpec } from "./enquiryForms";

// Renders one field from a form definition. Name, email and anything marked required are required.
export default function FormField({ field, idPrefix, optionalLabel }: { field: FieldSpec; idPrefix: string; optionalLabel: string }) {
  const id = `${idPrefix}${field.name}`;

  if (field.kind === "chips") {
    return (
      <fieldset className="fm-field fm-span">
        <legend className="fm-label">
          {field.label} <span className="fm-hint">({field.hint})</span>
        </legend>
        <div className="fm-chips">
          {field.options.map((o) => (
            <label key={o.value} className="fm-chip">
              <input type="checkbox" name={field.name} value={o.value} />
              <span>{o.label}</span>
            </label>
          ))}
        </div>
      </fieldset>
    );
  }

  const required = "required" in field && field.required === true;
  const span = "half" in field && field.half ? "fm-field" : "fm-field fm-span";
  const label = (
    <label className="fm-label" htmlFor={id}>
      {field.label}
      {!required && field.kind !== "select" && <span className="fm-hint"> ({optionalLabel})</span>}
    </label>
  );

  if (field.kind === "select") {
    return (
      <div className={span}>
        {label}
        <select id={id} name={field.name} className="fm-input fm-select" defaultValue="">
          <option value="">{field.placeholder}</option>
          {field.options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>
    );
  }

  if (field.kind === "textarea") {
    return (
      <div className={span}>
        {label}
        <textarea id={id} name={field.name} className="fm-input fm-textarea" rows={4} placeholder={field.placeholder} />
      </div>
    );
  }

  return (
    <div className={span}>
      {label}
      <input
        id={id}
        name={field.name}
        type={field.kind}
        className="fm-input"
        placeholder={field.placeholder}
        required={required}
        autoComplete={field.kind === "email" ? "email" : field.kind === "tel" ? "tel" : field.name === "name" ? "name" : undefined}
      />
    </div>
  );
}
