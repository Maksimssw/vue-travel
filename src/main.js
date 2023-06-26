import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI'
import {router} from "@/router/router";

const cors=require("cors");

const corsOptions ={
  origin:'*',
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

const app = createApp(App)
components.forEach(component => {
  app.component(component.name, component)
})

app
    .use(cors(corsOptions))
  .use(router)
  .mount('#app')
