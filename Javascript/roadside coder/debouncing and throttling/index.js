 //Debouncing and Throttling
/*what is debouncing?
Debouncing in JavaScript is a programming technique that limits the number of times a function is called within a specific period of time. This can be useful for improving performance by preventing a function from being called too frequently.

example:
you might use debouncing to prevent a user from submitting a form too many times. When the user types in a text field, you could use debouncing to wait for a few seconds before submitting the form. This would prevent the form from being submitted multiple times if the user types quickly.

what is throttling?
Throttling is a technique, to limit the execution of an event handler function, even when this event triggers continuously due to user actions. (ex: browser resizing)

example:
Let’s take an example of a shooting game, where user pulls the trigger of a weapon continuously. We need to take care of the Rate of Fire for different type of weapons.
Shotgun might take more time interval between two rounds of fire, where as machine guns take less interval. But the challenge here is, usually user clicks on trigger button continuously and we need to take care of the time interval between each shot.
Let’s say shotguns take 500ms to fire the next round and machine guns take just 100ms. We need to write the logic such that even if the user clicks on trigger button before this threshold, we should hold the fire according to the weapon’s Rate of Fire.*/

//ques 1
//create a button UI and add debounce as follows:
// show "button pressed x times" every time button is pressed
// increase "Triggered y times " count after 800ms of debounce
document.addEventListener('DOMContentLoaded', () => {


    const incrementCount = document.querySelector('.incrementCount')
    const debounceCount = document.querySelector('.incrementDebounce')
    const throttleCount = document.querySelector('.incrementThrottle')
    const button = document.querySelector('button')
    let count = 0;
    let triggeredCount = 0
    let throttledCount = 0

    const myDebounce = (cb, d) => {
        let timer;

        return function (...args) {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                cb(...args)
            }, d);
        }
    }
    const myThrottle = (cb, d) => {
        let last = 0;

        return (...args) => {
            let now = new Date().getTime()
            if (now - last < d) return;
            last = now
            return cb(...args)
        }
    }
    const debounce = myDebounce(() => {
        triggeredCount += 1
        debounceCount.innerHTML = triggeredCount
    }, 800)

    const throttle = myThrottle(() => {
        throttledCount += 1
        throttleCount.innerHTML = throttledCount
    }, 800)
    button.addEventListener("click", () => {
        count++
        incrementCount.textContent = count
        debounce()
        throttle()
    })
})