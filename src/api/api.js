export const getCommentsData = (pageNumber) => (
    fetch(`https://jordan.ashton.fashion/api/goods/30/comments?page=${pageNumber}`)
        .then(data => data.json())
);

export const postComment = (name, text) => {
    const data = {name, text};
    return (
        fetch('https://jordan.ashton.fashion/api/goods/30/comments', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => console.log(response))
    );
};