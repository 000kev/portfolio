import { useRef, useImperativeHandle, forwardRef} from "react";
import emailjs from '@emailjs/browser';

const ContactModal = forwardRef(function Contact({}, ref) {
    const form = useRef();
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return({
            open() {
                dialog.current.showModal();
            }
        })
    })
  
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_e75egjh', 'template_kl2u9k9', form.current, 'gZRGLr_h_c3k9-sn3')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
  
    return (
      <dialog ref={dialog} className="w-auto md:w-1/2" >
        <div className="flex flex-col">
          <form method="dialog" className="bg-slate-800 rounded" ref={form} onSubmit={sendEmail}>
            <span className="flex flex-row items-center">
              <h2 className="text-center text-white font-heading text-3xl p-3 mx-auto">Contact Me</h2>
              <button className="cursor-pointer -translate-x-2"><ion-icon color="light" name="close" onClick={(e) => dialog.current.close()}></ion-icon></button>
            </span>
            <span className="flex flex-col gap-y-3 w-3/4 mx-auto">
              <input
                className="bg-slate-500 text-justify text-slate-200 rounded p-1"
                type="text"
                placeholder="Full Name"
                name="user_name"
                required
              />
              <input
                className="bg-slate-500 text-justify text-slate-200 rounded p-1"
                type="email"
                placeholder="Email"
                name="user_email"
                required
              />
              <input
                className="bg-slate-500 text-justify text-slate-200 rounded p-1"
                type="text"
                placeholder="Subject"
                name="subject"
                required
              />
            </span>
            <span className="flex mx-auto my-3 w-3/4">
              <textarea
                className="bg-slate-500 text-justify text-slate-200 rounded p-1"
                placeholder="Message"
                name="message"
                cols="1000"
                rows="10"
              ></textarea>
            </span>
            <button className="flex mx-auto p-3" type="submit">
              <div className="bg-slate-200 p-2 rounded font-heading text-xl">
                  Send Message
              </div>
            </button>
          </form>
        </div>
      </dialog>
    );
  }
  )

export default ContactModal;