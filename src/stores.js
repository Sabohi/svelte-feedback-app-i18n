import { writable } from "svelte/store";

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 2,
        rating: 9,
        text: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
    },
    {
        id: 3,
        rating: 5,
        text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
]);