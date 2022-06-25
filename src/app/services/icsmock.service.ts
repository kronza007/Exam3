import { Injectable } from '@angular/core';
import { Resdatas } from '../interfaces/resdatas';
import { Observable, of } from 'rxjs';
import { IIcsdatasService } from './icsdatas.service.interface';

@Injectable({
    providedIn: 'root'
})
export class IcsdatasService implements IIcsdatasService {

    getIcsdata() {
        return of([
            {
                id: 9842,
                name: "Bistro Bazaar",
                categories: [
                    "restaurant"
                ],
                profile_image_url: "https://images.unsplash.com/photo-1587174147003-eb7dc051122b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDcxMTl8MHwxfHNlYXJjaHwyfHxzaG9wJTIwcmVzdGF1cmFudCUyMGJyZWFkfGVufDB8fHx8MTY0NjM2Nzg3Mg&ixlib=rb-1.2.1&q=80&w=1080",
                images: [
                    "https://images.unsplash.com/photo-1588280991458-d759882787cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDcxMTl8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwY29mZmVlfGVufDB8fHx8MTY0NjM2Nzg3NQ&ixlib=rb-1.2.1&q=80&w=1080",
                    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDcxMTl8MHwxfHNlYXJjaHwyfHxyZXN0YXVyYW50JTIwY29mZmVlfGVufDB8fHx8MTY0NjM2Nzg3NQ&ixlib=rb-1.2.1&q=80&w=1080",
                    "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDcxMTl8MHwxfHNlYXJjaHwzfHxyZXN0YXVyYW50JTIwY29mZmVlfGVufDB8fHx8MTY0NjM2Nzg3NQ&ixlib=rb-1.2.1&q=80&w=1080"
                ],
                operation_time: [
                    {
                        "day": "Monday",
                        "time_open": "9:00",
                        "time_close": "20:00"
                    },
                    {
                        "day": "Tuesday",
                        "time_open": "9:00",
                        "time_close": "20:00"
                    },
                    {
                        "day": "Wednesday",
                        "time_open": "9:00",
                        "time_close": "20:00"
                    },
                    {
                        "day": "Thursday",
                        "time_open": "9:00",
                        "time_close": "20:00"
                    },
                    {
                        "day": "Friday",
                        "time_open": "9:00",
                        "time_close": "20:00"
                    },
                    {
                        "day": "Saturday",
                        "time_open": "closed",
                        "time_close": "closed"
                    },
                    {
                        "day": "Sunday",
                        "time_open": "closed",
                        "time_close": "closed"
                    }
                ],
                address: "180 Soi Sensuk Phrachasongkro Din Daeng Din Daeng, Bangkok",
                rating: 4.1
            },

        ])
    }
}