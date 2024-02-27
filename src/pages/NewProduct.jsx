import { Formik, Form } from "formik";
import { newProductSchema, defaultAddProductValue } from "../utils/formSchema";
import Input from "../components/input/Input";
import Textarea from "../components/input/Textarea";
import Button from "../components/button/Button";

const NewProduct = () => {
  return (
    <main className="rounded-md overflow-hidden w-full shadow-md">
      <h2 className="uppercase text-lg font-semibold p-4 bg-[#763996] text-white">
        Add Product
      </h2>
      <section className="flex flex-col px-4 py-6">
        <Formik
          initialValues={defaultAddProductValue}
          validationSchema={newProductSchema}
          onSubmit={(values, action) => {
            console.log(values);
            action.resetForm();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            handleBlur,
            handleReset,
          }) => {
            return (
              <Form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="productName"
                    className="uppercase text-md font-semibold"
                  >
                    Name:
                  </label>
                  <Input
                    placeholder="Product name"
                    name="productName"
                    id="productName"
                    onChange={handleChange}
                    type="text"
                    value={values.productName}
                    onBlur={handleBlur}
                    error={errors.productName}
                  />
                  {errors.productName && touched.productName ? (
                    <div className="text-red-600">{errors.productName}</div>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="productName"
                    className="uppercase text-md font-semibold"
                  >
                    Price
                  </label>

                  <Input
                    placeholder="Price in NRs"
                    name="price"
                    onChange={handleChange}
                    type="number"
                    value={values.price}
                    onBlur={handleBlur}
                    error={Boolean(errors.price)}
                  />
                  {errors.price && touched.price ? (
                    <div className="text-red-600">{errors.price}</div>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="productName"
                    className="uppercase text-md font-semibold"
                  >
                    Brand
                  </label>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    name="brand"
                    placeholder="Brands (Optional)"
                    value={values.brand}
                  />
                </div>

                <div>
                  <label
                    htmlFor="productName"
                    className="uppercase text-md font-semibold"
                  >
                    Image URL:
                  </label>
                  <Input
                    placeholder="Image Url (Optional)"
                    name="imgUrl"
                    onChange={handleChange}
                    type="text"
                    value={values.imgUrl}
                    onBlur={handleBlur}
                  />
                </div>
                <div className=" col-span-2">
                  <label
                    htmlFor="productName"
                    className="uppercase text-md font-semibold"
                  >
                    Description:
                  </label>
                  <Textarea
                    placeholder="Product description"
                    name="description"
                    onChange={handleChange}
                    type="textarea"
                    value={values.description}
                    onBlur={handleBlur}
                    error={errors.description}
                  />
                  {errors.description && touched.description ? (
                    <div className="text-red-600">{errors.description}</div>
                  ) : null}
                </div>
                <div className="flex justify-end col-span-2 gap-4">
                  <Button
                    bgColor="#a6a6a6"
                    title="Add"
                    type="submit"
                    onClick={handleSubmit}
                  />
                  <Button
                    bgColor="#b70000"
                    title="Reset"
                    onClick={handleReset}
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </section>
    </main>
  );
};

export default NewProduct;
