<script>
    import { _ } from "svelte-i18n";
    import { FeedbackStore } from '../stores';
    import {v4 as uuidv4} from 'uuid'; 
    // import { createEventDispatcher } from 'svelte';
    import Card from "./Card.svelte";
    import Button from "./Button.svelte";
    import RatingSelect from "./RatingSelect.svelte";

    let text = '';
    let btnDisabled = true;
    let message;
    const min = 10;
    let rating = 10;

    const handleInput = () => {
        if(text.trim().length <= min){
            message = `Text must be atleast ${min} characters`;
            btnDisabled = true;
        }else{
            message = null;
            btnDisabled = false;
        }
    };

    const handleSelect = e => rating = e.detail;

    // const dispatch = createEventDispatcher();

    const handleSubmit = () => {
        
        if(text.trim().length > min){
            const newFeedback = {
                id: uuidv4(),
                text,
                rating: +rating
            };
            // dispatch('add-feedback', newFeedback);
            FeedbackStore.update(currentFeedback => {
                return currentFeedback = [newFeedback, ...currentFeedback];
            });
        }
    };
</script>

<Card>
    <header>
        <h2>
            {$_("form.title")}
        </h2>
    </header>
    <form on:submit|preventDefault={handleSubmit}>
        <RatingSelect on:rating-select={handleSelect}/>
        <div class="input-group">
            <input type="text" placeholder={$_("placeholders.reason")} bind:value={text} on:input={handleInput}>
            <Button type="submit" disabled={btnDisabled}>{$_("buttons.send")}</Button>
        </div>
        {#if message}
        <div class="message">
            {message}
        </div>
        {/if}
    </form>
</Card>

<style>
    header {
        max-width: 400px;
        margin: auto;
    }
    header h2 {
        font-size: 22px;
        font-weight: 600;
        text-align: center;
    }
    .input-group {
        display: flex;
        flex-direction: row;
        border: 1px solid #ccc;
        padding: 8px 10px;
        border-radius: 8px;
        margin-top: 15px;
    }
    input {
        flex-grow: 2;
        border: none;
        font-size: 16px;
    }
    input:focus {
        outline: none;
    }
    .message {
        padding-top: 10px;
        text-align: center;
        color: rebeccapurple;
    }
</style>