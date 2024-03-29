<template>
    <div class="flex flex-row justify-between items-center w-1/3">
        <div class="flex flex-row gap-2 items-center">
            <input type="radio" name="medium" id="medium">
            <label class="text-base text-infos" for="medium"><i class="bg-transparent  text-button_enter text-sm" :class="`icon ${icon_name}`"></i> {{ name }}</label>
        </div>
        <div v-if="old_price || new_price || price">
            <span class="text-xs font-bold text-infos">{{ old_price }} <span class="text-xs font-bold text-button_enter">{{ new_price }}</span></span>
            <span class="text-xs font-bold text-bookmark_text">{{ price }}</span>
        </div>
        <div v-else>
            <div class="flex flex-row justify-between items-center w-1/3" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RadioItem',
        props: {
            name: String,
            new_price: String,
            old_price: String,
            icon_name: String,
            price: String
        }
    }
</script>