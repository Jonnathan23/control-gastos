import { errorAlert } from "../alerts/alerts"

export class ErrorBudgedContext extends Error {
    constructor(message: string) {
        super(message)
        name: 'ErrorBudgedContext'
    }

    alert() {
        errorAlert(this.message)
    }
}