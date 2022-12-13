import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Upload = () => {
    const [imgs, setImage] = useState([]);

    const uploadFile = (file) => {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                resolve(event.target.result);
            }
        })
    }

    const submit = async () => {
        
    }

    const changeEvent = async (e) => {
        const { files } = e.target;

        if (files) {
            let filesAmount = files.length;
            let results = [];
            for (let i = 0; i < filesAmount; i++) {
                let ans = await uploadFile(files[i]);
                console.log(files[i])
                results.push({
                    url: ans,
                    name: files[i].name
                });
            }

            console.log(results);
            setImage(results);
        }

    }

    return (
        <Layout>
            <h1>Upload resource</h1>
            <input
                type="file"
                name="file"
                id="input-files"
                className="file-input"
                multiple
                onChange={(e) => changeEvent(e)}
            />

            <div className="image-preview">
                {imgs.map((r) =>
                    <div
                        style={{
                            display: 'flex'
                        }}
                    >
                        <img src={r.url}
                            style={{
                                width: `100px`,
                                border: `1px solid black`,
                                margin: `2px 0`,
                                height: `100px`
                            }}
                        />
                        <div>{r.name}</div>
                    </div>
                )}
            </div>

            <button className="" onClick={() => submit()}>SUBMIT</button>

            <br></br>

            <Link to="/">Go back to the homepage</Link>
        </Layout>
    )
}

export const Head = () => <Seo title="Upload | SHIJIE ZHOU" />

export default Upload;
