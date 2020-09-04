const checkbox = ({className, input, placeholder, type, meta, config, ...props}) => {

    return (
        <label className={className} data-uif-m=" md-t">
            <input type="checkbox" {...input} />

            <div className="checkbox__label">
                <span className="checkbox__icon"></span>
                <span className="checkbox__text">{config.title}</span>
            </div>
        </label>
    )
}
export default  checkbox;