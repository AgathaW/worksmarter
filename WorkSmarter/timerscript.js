export default class timerscript {
    constructor(root){
        root.innerHTML = timerscript.getHTML();

        this.el = {
            minutes: root.querySelector(".timer__part timer__part--minutes"),
            seconds: root.querySelector(".timer__part timer__part--seconds"),
            control: root.querySelector(".timer__btn--control"),
            reset: root.querySelector("timer__btn--reset")
        };

        this.interval = null;
        this.remainingSeconds = 0;

        this.el.control.addEventListener("click", () => {

        });
    }

    updateInterfaceTime(){
        
    }
    static getHTML() {
        return '
            <span class="timer__part timer__part--minutes">00</span>
            <span class="timer__part">:</span>
            <span class="timer__part timer__part--seconds">00</span>
            <button type="button" class="timer__btn timer__btn--control timer__btn--start">
                <span class="material-symbols-outlined">
                    play_arrow
                </span>
            </button>
            <button type="button" class="timer__btn timer__btn--reset">
                <span class="material-symbols-outlined">
                    restart_alt
                </span>
            </button>
        ';
    }
}