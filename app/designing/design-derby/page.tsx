"use client"
import FormfacadeEmbed from "@formfacade/embed-react";

const DesignDerby = () => {
    return (
        <div className="md:p-20 p-8">
            <FormfacadeEmbed

                formFacadeURL="https://formfacade.com/include/102262356723385342996/form/1FAIpQLSc3GRpusX4H2NZLNqE9w0CE2R7NCwZyZp_TbHwwZFzihTIVMw/classic.js/?div=ff-compose"

                onSubmitForm={() => console.log('Form submitted')}

            />
        </div>
    );
};

export default DesignDerby;