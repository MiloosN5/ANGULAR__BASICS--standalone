import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class LoggingService {
    log(message: string) {
        console.log(`[LOG]: ${message}`)
    }

    error(message: string) {
        console.error(`[ERROR]: ${message}`)
    }
}