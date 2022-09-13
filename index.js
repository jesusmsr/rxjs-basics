const { Observable } = require('rxjs');
const { map } = require('rxjs/operators')

const users = {
    data : [
        {
            status: 'active',
            age: '22'
        },
        {
            status: 'inactive',
            age: '54'
        },
        {
            status: 'active',
            age: '16'
        },
        {
            status: 'inactive',
            age: '38'
        },
        {
            status: 'inactive',
            age: '21'
        },
        {
            status: 'active',
            age: '42'
        }
    ]
}

const observable = new Observable((subscriber) => {
    subscriber.next(users);
}).pipe(

);

const observer = {
    next: (value) => { console.log('observer got: ' + value) },
    error: (error) => { console.log('error: ' + error) },
    complete: () => { console.log('observer got a complete notification') }
}

observable.subscribe(observer);