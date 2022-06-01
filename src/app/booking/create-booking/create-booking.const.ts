import { Validators } from "@angular/forms";

export const CREATE_BOOKING={
        id: [null],
        arrivalDate: [null, Validators.required],
        leavingDate: [null, Validators.required],
        numberOfPeople:[null, Validators.required],
        name: [null, Validators.required],
        email: [null, Validators.email],
        phoneNumber: [null, Validators.required],
        rooms: [null],
        meals: [null],
        extras: [null],
        totalPrice: [null],
        paymentMethod: [null, Validators.required],
        comments: [null],
        user: [null],
        isConfirmed: [null],
        isActive: [null],
        isPaid: [null]
}