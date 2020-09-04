const radio = ({className, input, placeholder, type, meta, config, ...props}) => {

    return (
        <label className={className} data-uif-m=" md-t">
            <input type="radio" {...input} />

            <div className="radio__label">
                <span className="radio__icon"></span>
                <span className="radio__text">{config.title}</span>
            </div>
        </label>
    )
}
export default radio;