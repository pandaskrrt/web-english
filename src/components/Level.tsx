import image from '@/assets/program.jpg'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const Level = () => {
  return (
    <div className="text-center">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-5 py-10">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Level
        </h2>
        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
          aliquid, dolore nesciunt corporis elige
        </p>
      </div>
      <div className="flex flex-wrap justify-center mx-2 md:mx-14">
        <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="p-8 rounded-t-lg"
                src={image}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Level 1
                </h5>
              </a>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Basic Speaking</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error similique incidunt itaque, nobis impedit alias
                    accusantium, natus recusandae quis dolor dolorum facere
                    officia earum minus eaque ad nisi? Impedit, autem.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="p-8 rounded-t-lg"
                src={image}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Level 2
                </h5>
              </a>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Speaking & Basic Grammar</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    atque, autem error voluptatibus, eius enim aut nemo nobis
                    odit amet quo assumenda itaque eaque sunt vero veritatis
                    delectus! Id, voluptatum.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="p-8 rounded-t-lg"
                src={image}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Level 3
                </h5>
              </a>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Advance Grammar</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo voluptate explicabo facilis placeat ipsam ad labore
                    tempore in sed nisi et esse perspiciatis similique, officiis
                    quasi a. Eligendi, modi delectus!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="p-8 rounded-t-lg"
                src={image}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Level 4
                </h5>
              </a>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-4">
                  <AccordionTrigger>TOEFL Preparation</AccordionTrigger>
                  <AccordionContent>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Enim ad, veritatis eius expedita fugiat in commodi,
                    perspiciatis amet nisi doloremque totam, nam quo adipisci!
                    Fugiat beatae incidunt facere neque error.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Level
