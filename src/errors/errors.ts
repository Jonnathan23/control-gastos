import { SetStateAction } from "react";
import { errorAlert } from "../alerts/alerts"

export class ErrorBudgedContext extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ErrorBudgedContext';
    }

    alert() {
        errorAlert(this.message)
    }
}

export class ErrorFormExpense extends Error {
    constructor(message: string, setError: (value: SetStateAction<string>) => void) {
        super(message)
        this.name = 'ErrorFormEmpty'
        setError(message)
    }
}