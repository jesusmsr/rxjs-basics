const { Observable } = require('rxjs');
const { map } = require('rxjs/operators');

const users = {
    data : [
        {
            status: 'active',
            age: 22
        },
        {
            status: 'inactive',
            age: 54
        },
        {
            status: 'active',
            age: 16
        },
        {
            status: 'inactive',
            age: 38
        },
        {
            status: 'inactive',
            age: 21
        },
        {
            status: 'active',
            age: 42
        }
    ]
}

const observable = new Observable((subscriber) => {
    subscriber.next(users);
}).pipe(
    map((value) => {
        console.log('1) First operator: ', value);
        return value.data;
    }),
    map((value) => {
        console.log('2) Second operator: ', value);
        return value.filter(user => user.status == 'active');
    }),
    map((value) => {
        console.log('3) Third operator: ', value);
        return value.reduce((sum, user) => sum + user.age, 0);
    })
);

const observer = {
    next: (value) => { console.log('observer got: ' + value) },
    error: (error) => { console.log('error: ' + error) },
    complete: () => { console.log('observer got a complete notification') }
}

observable.subscribe(observer);