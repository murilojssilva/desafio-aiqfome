<template>
  
  <MainHeader address="Rua Mandaguari, 198"/>

  <main class="flex flex-col bg-white">
    <section class="flex flex-row items-center gap-2 p-6">
      <img src="@/assets/images/matsuri.png" alt="">
      <h1 class="text-2xl font-bold text-title">Matsuri Concept</h1>
    </section>

    <section class="flex flex-row justify-between px-12">
      <div class="flex flex-col ">
        <div>
          <h2 class="text-2xl font-bold text-subtitle">Ceviche de salmão</h2>
          <p class="text-base font-bold text-infos">a partir de <span class="text-xl text-bookmark_text">R$ 19,90</span></p>
          <p class="text-base text-infos">salmão temperado com limão, cebola e pimenta</p>
        </div>

        <div class="flex flex-row justify-between items-center">
          <div>
            <span class="text-base font-bold ">quantos?</span>
            <p>total: <strong>R$ 29,90</strong></p>
          </div>

          <div class="flex gap-2 items-center">
            <i class="icon pi pi-trash bg-transparent  text-button_enter"></i>
            <span>1</span>
            <i class="icon pi pi-plus-circle bg-transparent  text-button_enter"></i>
          </div>
        </div>
      </div>
      <img src="@/assets/images/ceviche.png" alt="">
    </section>

    <section class="divide-y-4 divide-bars">
      <div class="p-6">
        <Title 
          title_text="qual o tamanho?"
          subtitle_text="escolha 1"
          obrigatory
        />      
        <div class="flex flex-row w-full justify-between p-2 gap-2">
          <RadioItem 
            name=" médio"
            new_price="R$ 19,90"
            old_price="de R$ 22,90 por"
            icon_name="pi pi-dollar"
          />
          <RadioItem 
            name=" grande"
            price="R$ 28,90"
          />
          <RadioItem />
        </div>
      </div>
      <div class="p-6">
        <Title 
          title_text="vai querer bebida?"
          subtitle_text="escolha quantos quiser"
        />

        <div class="flex flex-row gap-8 justify-between">
          <div class="flex flex-row justify-between items-center w-1/3">
          <div class="flex flex-row gap-2 items-center">
            <i class="icon pi pi-minus text-sm rounded-full p-1 bg-bars  text-infos"></i>
              <p class="text-subtitle text-sm font-bold">0</p>
              <i class="icon pi pi-plus-circle text-sm p-1 bg-transparent  text-button_enter"></i>
              <p class="text-base text-infos">coca-cola</p>
          </div>
          <span class="text-xs font-bold text-bookmark_text">+R$ 5,00</span>
        </div>

          <RadioItem 
            name=" suco prats laranja"
            price="+R$ 6,00"
          />
          <RadioItem 
            name=" água sem gás"
            price="+R$ 3,00"
          />        
        </div>
        
      </div>
      <div class="p-6">
        <Title 
          title_text="precisa de talher?"
          subtitle_text="escolha até 1"
        />

        <div class="flex flex-row gap-8 justify-between">
      
          <RadioItem 
            name=" hashi"
          />

          <RadioItem 
            name=" garfo e faca descartável"
            price="+R$ 1,00"
          /> 

          <RadioItem /> 

        </div>
      </div>
      <div class="p-6">

        <Title 
          title_text="mais alguma coisa?"
          subtitle_text="escolha até 2"
        />

        <div class="flex flex-row gap-8 justify-between">
          <div class="flex flex-row justify-between items-center w-1/3">
            <div class="flex flex-row gap-2 items-center">
              <input type="checkbox" name="cookie" id="cookie">
              <label class="text-base text-infos" for="cookie">biscoito da sorte</label> 
            </div>
            <span class="text-xs font-bold text-bookmark_text">+ R$ 2,00</span>
          </div>    

          <div class="flex flex-row justify-between items-center w-1/3">
            <div class="flex flex-row gap-2 items-center">
              <input type="checkbox" name="spring_roll" id="spring_roll">
                <label class="text-base text-infos" for="spring_roll">rolinho primavera</label>
            </div>
            <span class="text-xs font-bold text-bookmark_text">+ R$ 8,00</span>
          </div>
          <div class="flex flex-row justify-between items-center w-1/3" />
        </div>
      </div>

      
    </section>

    <AditionalItems />
  </main>

  <MainFooter />

</template>

<script>
import MainHeader from '@/layouts/MainHeader.vue'
import MainFooter from '@/layouts/MainFooter.vue'
import RadioItem from '@/components/RadioItem.vue'
import Title from '@/components/Title.vue'
import AditionalItems from '@/layouts/AditionalItems.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter,
    RadioItem,
    Title,
    AditionalItems
  }
}
</script>

