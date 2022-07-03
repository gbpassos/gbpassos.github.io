use yew::prelude::*;
use wasm_bindgen_futures;
use gloo::net::http::Request;

pub struct SanityClient {
    project_id: String,
    dataset: String,
    cdn: bool,
}

impl SanityClient {
    pub fn new(project_id: &str, dataset: &str, cdn: bool) -> SanityClient {
        SanityClient {
            project_id: String::from(project_id),
            dataset: String::from(dataset),
            cdn,
        }
    }

    pub  fn query(&self, query: String, callback: Callback<String>) -> String {
        let url = format!(
            "https://{project_id}.api.sanity.io/v2021-06-07/data/query/{dataset}",
            project_id = self.project_id,
            dataset = self.dataset
        );
        wasm_bindgen_futures::spawn_local(async move {
            let request = Request::get(&url).query([("query", &query)]).send().await.unwrap();
            let body = request.text().await.unwrap();
            callback.emit(body);
        });
        // let client = reqwest::Client::new();
        // let mut res = client.get(&url)
        //     .query(&[("query", query)])
        //     .send().await.unwrap();
        // let body = res.text().await.unwrap();
        // body
        String::from("")
    }
}