"use client"
import FormfacadeEmbed from "@formfacade/embed-react";

const Androjam = () => {
    return (
        <div className="md:p-20 p-8">
            <FormfacadeEmbed

                formFacadeURL="https://formfacade.com/include/102262356723385342996/form/1FAIpQLSfDYMdkY60OiG2Aq4myrxJteuIity8AIGx9EeWo-t_xppYJ4g/classic.js/?div=ff-compose"

                onSubmitForm={() => console.log('Form submitted')}

            />
        </div>
    );
};

export default Androjam;