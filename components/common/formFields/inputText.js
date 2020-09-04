import Icons from "../../../utils/Icons";

const inputText = ({className, input, placeholder, type, meta, config, ...props}) => {

    return (
        <div className={`uif field ${config.required && 'required'} ${meta.touched && meta.error && 'error'}`} data-uif-m=" lg-t">
            {config.title &&
                <div className={`field__title c-black-6 ${config.title_iconName && 'info'}`}>
                    {config.title}
                    {config.title_iconName &&
                        <Icons icon={config.title_iconName} size={'size-sm'} className="icon__user" />
                    }
                </div>
            }

            <div className={`field__input ${config.input_iconName && 'icon'} ${config.input_icon_position && config.input_icon_position}`}>
                {config.input_iconName &&
                    <Icons icon={config.input_iconName} size={'size-md'} className="icon__password" />
                }
                <input className={className} {...input} type={type} placeholder={placeholder} />
            </div>

            <small className="field__message hidden">{meta.error}</small>
        </div>
    )
}
export default  inputText;