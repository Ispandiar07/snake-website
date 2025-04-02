const poem = "Моя любовь к тебе, как эти котята,\nНежна, игрива и всегда рядом.\nТы - мое счастье, моя отрада,\nИ без тебя мне жизни не надо.\n\nТвои глаза - два ярких огонька,\nЧто освещают путь мой в темноте.\nТвоя улыбка - солнца луч слегка,\nЧто дарит радость и тепло душе.\n\nЯ благодарен небесам за встречу,\nЗа каждый миг, что провел с тобой.\nТы - мое чудо, мой бесценный вечер,\nМоя любовь, мой ангел неземной.";

const poemElement = document.getElementById('poem');
let charIndex = 0;

function typeWriter() {
    if (charIndex < poem.length) {
        poemElement.textContent += poem.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100); // Скорость печати (100 мс)
    }
}

typeWriter();
