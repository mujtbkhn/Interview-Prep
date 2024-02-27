//event propagation:
//Event propagation in JavaScript is a mechanism that controls how events move through the Document Object Model (DOM) tree when an event occurs.
//https://shivamgupta6418.hashnode.dev/event-propagation-in-javascript

//event bubbling 
//as the name suggest the events are triggered bottom up (like a bubble)
//event bubbling is default 
document.addEventListener('DOMContentLoaded', () => {

    const div = document.querySelector('div')
    const form = document.querySelector('form')
    const button = document.querySelector('button')


    // div.addEventListener("click", function(){
    //     alert("div")
    // })
    // form.addEventListener("click", function(){
    //     alert("form")
    // })
    // button.addEventListener("click", function(){
    //     alert("button")
    // })


    //some event that do not bubble
    /**
     * Focus events:
    
    focus
    blur
    focusin
    focusout
    Mouse events:
    
    mouseenter
    mouseleave
    Resource events:
    
    loadstart
    progress
    load
    loadend
    timeout
    error
    abort
    Media events:
    
    emptied
    stalled
    suspend
    timeupdate
    volumechange
    ratechange
    durationchange
     */

    //event.target vs event.currentTarget vs this.target

    // div.addEventListener("click", func
    // )
    // form.addEventListener("click", func
    // )
    // button.addEventListener("click", func
    // )

    // function func(event) {
    //     alert(
    //         "currentTarget = " + event.currentTarget.tagName +  //currentTarget will point the attribute which is currently active
    //         ", target = " + event.target.tagName + //target will point to the first attribute of clicking
    //         ", this = " + this.tagName //same as currentTarget
    //     )
    // }


    //event capturing/tickling
    //events happening in top to bottom approach

    // div.addEventListener("click", function () {
    //     alert("div")
    // }, {
    //     capture: true
    // })
    // form.addEventListener("click", function () {
    //     alert("form")
    // }, {
    //     capture: true
    // })
    // button.addEventListener("click", function () {
    //     alert("button")
    // }, {
    //     capture: true
    // })

    //how to stop event capturing/bubbling
    //by adding an e stopPropagation()
    //you can even specify for how many events you want to stop the propagation by adding the stopPropagation till that event only
    div.addEventListener("click", function(e){
        
        alert("div")
    })
    form.addEventListener("click", function(e){
        
        alert("form")
    }, {
        capture: true
    })
    button.addEventListener("click", function(e){
        
        alert("button")
    }, {
        capture: true
    })

    //event delegation:
    //Event delegation is a technique in JavaScript where we delegate the responsibility of handling an event to a parent element. By doing so, we avoid attaching multiple event listeners to individual elements, especially when dealing with a large number of similar elements, such as a list or a table.
})

