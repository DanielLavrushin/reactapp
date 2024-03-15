interface IButtonModel {
    text: string;
    onClick: (button: HTMLElement) => void;
}

class ButtonModel implements IButtonModel {
    text: string;
    constructor(text: string) {
        this.text = text;
    }

    onClick = (button: HTMLElement) => {
    };
}

export default IButtonModel;