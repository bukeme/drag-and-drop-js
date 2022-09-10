const listEl = document.querySelectorAll('.list')
const listItemEl = document.querySelectorAll('.list-item')

let draggedItem = null
listItemEl.forEach(function(element) {
    element.setAttribute('draggable', 'true')

    element.addEventListener('dragstart', function() {
        draggedItem = element
        setTimeout(() => {
            element.style.display = 'none'
        }, 0);
    })

    element.addEventListener('dragend', function() {
        setTimeout(() => {
            element.style.display = 'block'
        }, 0);
        draggedItem = null
    })

    listEl.forEach(element => {
        element.addEventListener('dragover', function(e) {
            e.preventDefault()
        })
        element.addEventListener('dragenter', function(e) {
            e.preventDefault()
            element.style.backgroundColor = 'rgba(255, 255, 255, 0.7)'
        })
        element.addEventListener('dragleave', function(e) {
            e.preventDefault()
            element.style.backgroundColor = 'rgba(88, 65, 83, 0.5)'
        })
        element.addEventListener('drop', function(e) {
            element.style.backgroundColor = 'rgba(88, 65, 83, 0.5)'
            element.append(draggedItem)
        })
    });
})