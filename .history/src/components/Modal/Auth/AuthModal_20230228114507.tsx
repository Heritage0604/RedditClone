import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react'
import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
type Props = {}

const AuthModal = (props: Props) => {

const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a quas. Sit error velit exercitationem aliquam, ex rerum ipsam labore, at deleniti earum, molestiae nihil unde minus dicta. Officia alias facere amet perferendis quisquam, reprehenderit quo doloremque ipsa hic cumque adipisci nihil error inventore rem ipsum corporis? Atque quidem voluptatem in quas qui officia aperiam quam, quae ducimus eum dolorem pariatur neque, sed ipsam. Veniam, sint harum excepturi aliquid vero maxime veritatis quos laboriosam. Eveniet fugit impedit iste quaerat velit, doloremque eaque nemo qui aperiam voluptate cumque dolore beatae perspiciatis esse placeat nostrum, deserunt distinctio minus perferendis praesentium repellendus ex ut accusantium dolorem? Doloremque sunt iste voluptate. Vero nesciunt autem accusamus quasi harum excepturi porro temporibus necessitatibus est, magnam dolore repellendus? Totam, voluptas, sint harum, saepe nemo odit exercitationem dolorum aut accusamus cupiditate iste mollitia sunt magnam ea laborum necessitatibus unde excepturi. Dolorem, distinctio. Dignissimos accusamus natus nostrum, numquam perspiciatis quidem? Quisquam natus aperiam amet consectetur quaerat. Rerum, soluta eos repudiandae quisquam inventore modi a dignissimos adipisci vitae, harum autem natus. Cum aspernatur officiis porro placeat nesciunt, itaque recusandae dolorem magnam numquam repellendus quia suscipit quasi, harum ex similique expedita. Unde perspiciatis eveniet aspernatur accusamus sint repudiandae tempore dolorum eius deserunt reiciendis, blanditiis minima voluptates eaque vitae repellendus enim nemo porro facilis distinctio explicabo totam fugit non quod ad! Deserunt nam quo officia aut provident? Dignissimos quis distinctio velit reiciendis repellat id enim, in, incidunt officia perferendis provident expedita delectus et minus ex dicta nisi quod quam iusto atque commodi? Deleniti voluptatum, impedit blanditiis magnam eaque corporis quaerat asperiores quasi error libero, saepe laudantium nostrum similique eum perspiciatis nihil natus molestiae eos ex odio optio labore quod. Odit, nam odio eos consequuntur harum molestiae deserunt error voluptatum nostrum beatae commodi accusantium vero. Expedita, facere, ab voluptas debitis consectetur commodi fugiat quas sit vel aperiam laudantium assumenda quasi soluta eaque amet omnis illum atque magni, repudiandae tenetur nemo. Nisi optio veritatis, fugit provident reprehenderit autem nihil reiciendis quasi possimus, incidunt quis. Et harum alias cumque eum hic maiores at quod corporis inventore repudiandae vitae illum deserunt animi quis, quidem non iure ratione, veniam doloremque repellat minima. Cumque laboriosam ipsa aut beatae cum vitae laudantium labore possimus ex! Consectetur vero qui alias beatae quod a corporis nihil ipsam optio similique nostrum quos totam, repellendus debitis sed minima at necessitatibus, voluptate dignissimos nobis neque eligendi, corrupti hic. Eaque est ipsa culpa sit officia vel, placeat officiis cum ad dignissimos, harum, ipsum accusantium nobis fugiat numquam dolor! Neque officia at quaerat earum voluptatibus illum consequuntur perspiciatis labore eum placeat. Deserunt recusandae dolor aperiam ad, eos aut placeat quisquam vitae illo rem velit dolorem temporibus doloremque, magnam esse excepturi fugiat? Ex veritatis, facere quis voluptatum, eveniet temporibus quaerat maxime voluptatibus exercitationem amet sit molestiae suscipit, mollitia veniam expedita earum consequatur error non. Rerum optio soluta voluptatibus est inventore error beatae molestiae debitis earum consectetur eaque quis modi sed dignissimos ducimus, repellendus, vel id accusantium iure fugiat quisquam fugit nisi. Corporis inventore reiciendis ullam dignissimos minima quibusdam temporibus repudiandae enim accusamus eius voluptate consequatur cumque repellat suscipit expedita, praesentium commodi laudantium tempora nostrum asperiores, fugit magnam! Facilis officia reprehenderit sit omnis exercitationem sed blanditiis corrupti. Pariatur molestias labore eveniet aspernatur cum, accusantium dolorum fugit, molestiae ratione dolores natus in magnam aperiam libero facilis maiores sed! Maxime minus nisi beatae asperiores numquam alias ratione laudantium itaque, dolor minima inventore veritatis. Sint quo, libero sed necessitatibus tempore vitae autem aspernatur placeat nostrum mollitia ipsam vel accusamus dignissimos consequuntur numquam laudantium? Rem alias cumque hic dolorem similique deserunt quae voluptate, atque animi maxime? Autem modi quasi repellat optio doloribus eaque magni molestias, impedit, quibusdam a quaerat atque labore reprehenderit dolorum? Accusantium delectus ipsum dolores, aperiam tenetur, culpa rerum alias doloremque eos tempore porro fuga facere veniam eveniet illo corrupti excepturi. Esse inventore repellendus odio accusamus minus? Earum sint voluptas suscipit natus omnis quas enim numquam error possimus. Odit possimus, vel obcaecati architecto sunt voluptas necessitatibus tempore similique ducimus natus sit facilis odio, atque quia beatae culpa laboriosam esse provident fugit perspiciatis ea quisquam optio facere? Magni excepturi eum quis temporibus maiores blanditiis sunt sint nihil ab optio, laboriosam quisquam totam. Asperiores consequuntur minima nulla voluptatem ducimus? Quas repellendus modi facere voluptate fugit ipsa mollitia quisquam quo eveniet, accusamus harum consequuntur omnis doloribus, ipsam impedit deserunt iste asperiores exercitationem sit dolorem cum sunt nulla placeat. Expedita quo soluta obcaecati, iusto vitae ipsam doloremque quam, esse harum inventore ex minima. A ullam officiis eaque voluptates eum, quam nihil rem id eveniet atque commodi reiciendis veniam nobis unde ab nesciunt omnis magnam recusandae molestias! Doloremque sit saepe deleniti quibusdam, expedita excepturi maiores hic amet quaerat veniam nostrum necessitatibus eveniet illo, perspiciatis provident ipsa, exercitationem unde facilis voluptatum accusantium reprehenderit sint laudantium. Nostrum maxime aliquam necessitatibus animi itaque facere voluptatibus quaerat? Accusantium maiores corporis doloribus ut omnis dignissimos expedita dolor qui harum nemo, sunt saepe odit optio consequatur porro id reiciendis sed cumque officia ea laborum aspernatur distinctio molestiae quas! Corporis quos incidunt culpa, totam ducimus est accusantium perspiciatis optio illo, vel mollitia, perferendis odio consequatur iure assumenda? Debitis asperiores itaque totam molestiae nobis. Itaque dolores expedita minus inventore deserunt ipsum accusantium dicta, magni aspernatur quae atque laborum, quos, quibusdam cumque. Quis quidem eligendi quae cupiditate architecto corrupti non consequatur, assumenda at voluptas. Aliquam molestias laudantium consequuntur dolorem vero nobis ducimus sapiente corporis cum distinctio maiores totam explicabo ex, velit sit veritatis labore, exercitationem repellendus ipsam. Provident tenetur unde aspernatur, minus aliquam molestias, alias, laudantium accusantium magni officia consequuntur! Perferendis vero nam vel quaerat eligendi laudantium ipsa, aliquam ducimus, tempora suscipit iusto accusantium beatae aperiam dolorum debitis optio. Excepturi, aliquam quos. Culpa corrupti odio labore. A vitae sed tenetur ullam, quis veniam aliquid eaque facilis excepturi aut esse eligendi, nostrum quaerat! Debitis non quas atque eligendi dolorum asperiores natus molestiae nostrum, iure at quae dolore fugiat similique ullam assumenda veritatis recusandae repudiandae quidem excepturi dolor laboriosam praesentium laborum? Voluptatem recusandae eaque autem, doloribus, ratione inventore dolorum a dolorem natus consequatur ipsa, itaque cumque!
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )

}

export default AuthModal