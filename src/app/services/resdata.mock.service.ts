import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resdata } from '../interfaces/resdata.model'
import { IResdataService } from './resdata.service.interface';

export class ResdataService implements IResdataService{

    getResdatas(): Observable<Resdata[]> {
        throw new Error('Method not implemented.');
    }

  
    private mockTodos: Resdata[] = [
        {
            id: 3909,
            name: "Cuisine Street",
            categories: [
                "restaurant",
                "cafe"
            ],
            profileurl: "https://images.unsplash.com/photo-1596547807467-0a24b84a329d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDcxMTl8MHwxfHNlYXJjaHwzfHxzaG9wJTIwY2FmZSUyMHN0cmVldCUyMGZvb2R8ZW58MHx8fHwxNjQ2MzY3ODY3&ixlib=rb-1.2.1&q=80&w=1080",
            images: [
                "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDcxMTl8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwc3RyZWV0JTIwZm9vZHxlbnwwfHx8fDE2NDYzNjc4NjE&ixlib=rb-1.2.1&q=80&w=1080",
                "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDcxMTl8MHwxfHNlYXJjaHwyfHxyZXN0YXVyYW50JTIwc3RyZWV0JTIwZm9vZHxlbnwwfHx8fDE2NDYzNjc4NjE&ixlib=rb-1.2.1&q=80&w=1080",
                "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDcxMTl8MHwxfHNlYXJjaHwzfHxyZXN0YXVyYW50JTIwc3RyZWV0JTIwZm9vZHxlbnwwfHx8fDE2NDYzNjc4NjE&ixlib=rb-1.2.1&q=80&w=1080"
            ],
            operation_time: [
                
            ],
            address: "5Th Floor Modern Home Tower 149 Nonsi Road Chongnonsi, Bangkok",
            rating: 4.3
        }
    ];
}