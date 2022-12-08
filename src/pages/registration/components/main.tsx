export function Main() {
    return (
        <div className=' bg-red-600 w-[1113px] h-[559px] border rounded-2xl justify-center ml-[25rem] mt-[3rem] flex '>

            <form action="/cadastroDePokomon" method="post" >
                <fieldset className=' bg-white w-[997px] h-[522px] border rounded-2xl justify-center ml-[1rem] mt-[2rem] flex '>

                    <label className=" grid m-1 items-center  w-[797px] h-[422px]  ">

                        <label className="w-[14rem] h-[2rem] bg-gray-300 mt-10 font-inter text-2xl ml-[21rem] pl-12">Cadastro</label>
                        <label>
                            Tipo:
                            <input type="text" name="name" />
                        </label>

                        <label>
                            Nome:
                            <input type="text" name="name" />
                        </label>

                        <label>
                            Evolução:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Numero na Pokedex:
                            <input type="text" id="algumaCoisa"></input></label>

                    </label>
                    <button type="submit" className="flex flex-col-reverse bg-zinc-300 h-5 w-20 mt-[28rem] mr-5" >Enviar</button>
                </fieldset>
            </form>

        </div>

    )
} 