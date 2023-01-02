import './style.scss';
import { motion } from 'framer-motion';
import Footer from '../Footer';


const About = ({navIsOpen}) => {
  const open = {
    x: '5vw',
    width: 'calc(100% - 5.5vw)',
    height: 'calc(100% - 1vh)',
    marginTop: '0.5vh',
  }
  const closed = {
    x: 0,
    width: '100%',
    height: '100%',
    marginTop: '0rem',
    borderRadius: '0',
    transition: {
      delay: 0.4,
    }
  }
return (
  <motion.section className='about-container'  animate={navIsOpen ? open : closed} initial={false}>
    <div className="flex">
      <motion.h1 initial={{y: -100, opacity: 0}} animate={{opacity: 1, y:0, transition: {duration: 1}}}>About me.</motion.h1>
      <motion.p initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1}}} viewport={{ once: true }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus in mollis nunc sed id. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Massa ultricies mi quis hendrerit. Sed turpis tincidunt id aliquet risus feugiat in ante. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Tellus elementum sagittis vitae et leo duis. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Laoreet sit amet cursus sit amet dictum sit amet. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Massa sed elementum tempus egestas sed. Dui faucibus in ornare quam viverra orci sagittis. At erat pellentesque adipiscing commodo elit. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Amet purus gravida quis blandit. Arcu ac tortor dignissim convallis aenean. Nisi quis eleifend quam adipiscing. A diam maecenas sed enim ut sem viverra aliquet.
      </motion.p>
      <motion.p initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 0.2, duration: 2}}} viewport={{ once: true, amount: 0.2 }}>
      Aliquam sem fringilla ut morbi. Est ante in nibh mauris cursus. Nullam ac tortor vitae purus faucibus ornare suspendisse. Ac odio tempor orci dapibus ultrices. Sollicitudin aliquam ultrices sagittis orci. Hendrerit dolor magna eget est lorem. Cursus in hac habitasse platea dictumst quisque sagittis purus. Sagittis eu volutpat odio facilisis. Senectus et netus et malesuada fames ac. Pellentesque sit amet porttitor eget. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Non nisi est sit amet facilisis magna etiam tempor. Porta non pulvinar neque laoreet. Ut eu sem integer vitae justo eget magna. Tortor posuere ac ut consequat.
      </motion.p>
      <motion.p initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 0.2, duration: 1}}} viewport={{ once: true, amount: 0.2 }}>
      Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Sit amet risus nullam eget felis eget nunc lobortis. Libero justo laoreet sit amet cursus sit amet dictum sit. Vitae turpis massa sed elementum tempus egestas sed. Dolor sit amet consectetur adipiscing. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Nunc sed augue lacus viverra. Turpis massa sed elementum tempus. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Ultricies mi quis hendrerit dolor magna eget est lorem. Commodo ullamcorper a lacus vestibulum sed arcu non. Risus in hendrerit gravida rutrum quisque non tellus orci ac. Adipiscing elit ut aliquam purus.
      </motion.p>
      <motion.p initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 0.2, duration: 1}}} viewport={{ once: true, amount: 0.2 }}>
      Faucibus interdum posuere lorem ipsum dolor. Iaculis nunc sed augue lacus viverra vitae congue. Integer eget aliquet nibh praesent. Sit amet consectetur adipiscing elit pellentesque. Malesuada fames ac turpis egestas integer. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Purus ut faucibus pulvinar elementum. Purus viverra accumsan in nisl nisi scelerisque eu. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Id consectetur purus ut faucibus pulvinar.
      </motion.p>
      <motion.p initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 0.2, duration: 1}}} viewport={{ once: true, amount: 0.2 }}>
      Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Erat nam at lectus urna duis convallis convallis. Cras semper auctor neque vitae tempus quam pellentesque nec. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Est ante in nibh mauris cursus mattis molestie a. Purus non enim praesent elementum facilisis leo. Ipsum a arcu cursus vitae congue mauris rhoncus aenean. Convallis convallis tellus id interdum velit laoreet id donec. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Venenatis cras sed felis eget. Eleifend donec pretium vulputate sapien nec sagittis. Sed libero enim sed faucibus turpis in eu mi bibendum. Imperdiet proin fermentum leo vel. Ac turpis egestas sed tempus urna et pharetra. Id venenatis a condimentum vitae sapien pellentesque.
      </motion.p>
      <motion.p initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 0.2, duration: 1}}} viewport={{ once: true, amount: 0.2 }}>
      Egestas diam in arcu cursus euismod. Lacus sed viverra tellus in hac. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Varius duis at consectetur lorem donec massa sapien faucibus. Et ultrices neque ornare aenean. Eleifend donec pretium vulputate sapien nec. Lacus vestibulum sed arcu non odio euismod lacinia at. Diam in arcu cursus euismod quis viverra nibh cras. Feugiat in fermentum posuere urna. Condimentum lacinia quis vel eros donec ac odio. Lectus mauris ultrices eros in cursus. Non consectetur a erat nam at. Fringilla ut morbi tincidunt augue interdum velit euismod in. Semper risus in hendrerit gravida rutrum quisque. Mauris nunc congue nisi vitae suscipit tellus mauris. Feugiat sed lectus vestibulum mattis ullamcorper velit.
      </motion.p>
      <motion.p initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 0.2, duration: 1}}} viewport={{ once: true, amount: 0.2 }}>
      Nunc sed velit dignissim sodales ut eu sem. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. Mi bibendum neque egestas congue quisque egestas. Id consectetur purus ut faucibus pulvinar. Risus pretium quam vulputate dignissim suspendisse in. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Pellentesque adipiscing commodo elit at. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Lacus laoreet non curabitur gravida arcu. Laoreet id donec ultrices tincidunt arcu non sodales neque. Ut etiam sit amet nisl purus in mollis. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Rutrum tellus pellentesque eu tincidunt tortor. Proin libero nunc consequat interdum varius sit amet mattis.
      </motion.p>
      <motion.p initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 0.2, duration: 1}}} viewport={{ once: true, amount: 0.2 }} >
      Vehicula ipsum a arcu cursus vitae congue mauris. Ipsum suspendisse ultrices gravida dictum fusce ut. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Consectetur a erat nam at lectus. Nec feugiat in fermentum posuere urna. Ultricies mi eget mauris pharetra et. Vitae auctor eu augue ut lectus arcu. Viverra maecenas accumsan lacus vel facilisis. Ipsum dolor sit amet consectetur adipiscing elit ut. Egestas congue quisque egestas diam. Mi bibendum neque egestas congue quisque egestas diam. Id leo in vitae turpis massa sed elementum tempus. Aenean et tortor at risus viverra adipiscing at in. Et sollicitudin ac orci phasellus egestas tellus rutrum. Nam aliquam sem et tortor. Erat imperdiet sed euismod nisi.
      </motion.p>
      <motion.p initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 0.2, duration: 1}}} viewport={{ once: true, amount: 0.2 }}>
      Magna ac placerat vestibulum lectus. Sit amet nulla facilisi morbi. Lectus nulla at volutpat diam ut venenatis tellus. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Facilisi cras fermentum odio eu feugiat pretium. Diam quis enim lobortis scelerisque fermentum dui faucibus. Tristique magna sit amet purus gravida quis. Libero enim sed faucibus turpis in eu mi. Elit duis tristique sollicitudin nibh sit amet commodo. Euismod lacinia at quis risus sed vulputate odio. Feugiat nisl pretium fusce id velit.
      </motion.p>
      <motion.p initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 0.2, duration: 1}}} viewport={{ once: true, amount: 0.2 }}>
      Diam maecenas sed enim ut sem viverra. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Accumsan sit amet nulla facilisi morbi tempus. Ipsum dolor sit amet consectetur adipiscing. Scelerisque felis imperdiet proin fermentum. Elit scelerisque mauris pellentesque pulvinar pellentesque. Mattis enim ut tellus elementum. Imperdiet sed euismod nisi porta lorem mollis aliquam. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Egestas pretium aenean pharetra magna ac placerat. Non enim praesent elementum facilisis leo vel fringilla est. Lectus mauris ultrices eros in. Tincidunt id aliquet risus feugiat in ante metus dictum at. Velit sed ullamcorper morbi tincidunt ornare massa eget. Diam sit amet nisl suscipit adipiscing bibendum est. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus.
      </motion.p>
    </div>
    <Footer />
  </motion.section>
)
}

export default About;