import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { IMAGE_UPLOAD, IMAGE_LIST, IMAGE_DELETE } from "../../env.js"

const Upload = () => {
    const [imgs, setImage] = useState([]);
    const [listImg, setListImg] = useState([]);

    const refreshImages = async () => {
        const res1 = await fetch(IMAGE_LIST);
        if (!res1.ok) {
            throw new Error(`Response failed`)
        }

        const a = await res1.json();
        setListImg(a);
    }

    useEffect(() => {
        refreshImages();
    }, [])

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
        const res = await fetch(IMAGE_UPLOAD, {
            method: 'POST',
            body: JSON.stringify(imgs),
            headers: { 'Content-Type': "application/json" }
        })

        if (!res.ok) {
            throw new Error(`Response failed`)
        }

        const rs = await res.json();
        console.log(rs);
        refreshImages();
        setImage([]);
    }

    const changeEvent = async (e) => {
        const { files } = e.target;

        if (files) {
            let filesAmount = files.length;
            let results = [];
            for (let i = 0; i < filesAmount; i++) {
                let ans = await uploadFile(files[i]);
                results.push({
                    url: ans,
                    name: files[i].name,
                    type: files[i].type,
                    size: files[i].size,
                    lastModified: files[i].lastModified
                });
            }

            setImage(results);
        }

    }

    const deleteImageByName = async (name) => {
        const delRes = await fetch(IMAGE_DELETE, {
            method: 'DELETE',
            body: JSON.stringify({name}),
            headers: { 'Content-Type': "application/json" }
        });

        if (!delRes.ok) {
            throw new Error(`Response failed`)
        }

        refreshImages();
    };

    return (
        <Layout>
            <h1>Upload resource</h1>

            <div>
                <h2>All Images: </h2>
                <div className="image-preview">
                    {listImg.map((r) =>
                        <div
                            style={{
                                display: `flex`,
                                width: `100%`,
                                alignItems: `center`,
                                justifyContent: `space-between`,
                                border: `1px solid lightskyblue`
                            }}
                            key={r.name}
                        >
                            <img src={r.url}
                                style={{
                                    border: `1px solid black`,
                                    margin: `5px 5px 5px 0`,
                                    height: `60px`
                                }}
                            />
                            <div>{r.name}</div>
                            <div>
                                <div><button>Edit</button></div>
                                <div><button onClick={()=>deleteImageByName(r.name)}>Del</button></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div>
                <h2>Upload Images: </h2>
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
                                display: `flex`,
                                width: `100%`,
                                alignItems: `center`,
                                justifyContent: `space-between`,
                                border: `1px solid lightskyblue`
                            }}
                            key={r.name}
                        >
                            <img src={r.url}
                                style={{
                                    border: `1px solid black`,
                                    margin: `5px 5px 5px 0`,
                                    height: `60px`
                                }}
                            />
                            <div>{r.name}</div>
                        </div>
                    )}
                </div>

                <button className="" onClick={() => submit()}>SUBMIT</button>
            </div>


            <br></br>

            <Link to="/">Go back to the homepage</Link>
        </Layout>
    )
}

export const Head = () => <Seo title="Upload" />

export default Upload;
