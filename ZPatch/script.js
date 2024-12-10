
// Variables
let layoutWrapper = undefined;

const styleTag = document.createElement('style');
document.head.appendChild(styleTag);

const paginationStyle = document.createElement('style');
document.head.appendChild(paginationStyle);

loading(false);

// Observer that detects when the bundle builder popup opens or closes 
const observer = new MutationObserver((mutations) => {
    // For each mutation detected check if it is the bundle builder popup
    mutations.forEach(mutation => {
        if (mutation.type === 'childList') {

            // If bundle builder is opened
            mutation.addedNodes.forEach(node => {
                if (node.matches && node.matches('.Popup-Content')) {

                    // Check if content is loaded in intervals of 100ms
                    let interval = setInterval(() => {
                        try {
                            layoutWrapper =  document.querySelector('.PackageDealProductList-LayoutWrapper');
                        }
                        catch (error) {
                            layoutWrapper = undefined;
                        }
        
                        // If content is loaded clear interval and add the searchbar 
                        if (layoutWrapper) {
                            clearInterval(interval);
                            let searchBar = document.createElement('input');
                            layoutWrapper.appendChild(searchBar);
                            
                            // Create searchbar functionality
                            searchFunctionality(searchBar);
                            
                            // Create loading product grid
                            let loadingProductGrid = document.createElement('ul');
                            loadingProductGrid.className = 'ProductListPage Loading';
                            document.querySelector('.PackageDealProductList_layout_grid').appendChild(loadingProductGrid);
                            loadingProductGrid.innerHTML = `<li class="ProductListPage-Offset"></li><li class="ProductCard ProductCard_layout_grid "><button class="ProductCard-Link "><div class="ProductCard-LinkInnerWrapper"><div class="ProductCard-FigureReview"><figure class="ProductCard-Figure"><div class="ProductLabels"></div><div class="Image Image_ratio_custom Image_imageStatus_image_not_specified Image_isPlaceholder ProductCard-Picture   Image-WidthFull Image-HeightFull"></div><img alt="undefined - " src="" loading="lazy" style="display: none;"></figure></div><div class="ProductCard-Content"><p class="ProductCard-Name"><span class="TextPlaceholder TextPlaceholder_length_medium "></span></p><span class="TextPlaceholder TextPlaceholder_length_short "></span></div><div class="ProductCard-VisibleOnHover"></div></div></button><div class="ProductCard-AdditionalContent"></div></li><li class="ProductCard ProductCard_layout_grid "><button class="ProductCard-Link "><div class="ProductCard-LinkInnerWrapper"><div class="ProductCard-FigureReview"><figure class="ProductCard-Figure"><div class="ProductLabels"></div><div class="Image Image_ratio_custom Image_imageStatus_image_not_specified Image_isPlaceholder ProductCard-Picture   Image-WidthFull Image-HeightFull"></div><img alt="undefined - " src="" loading="lazy" style="display: none;"></figure></div><div class="ProductCard-Content"><p class="ProductCard-Name"><span class="TextPlaceholder TextPlaceholder_length_medium "></span></p><span class="TextPlaceholder TextPlaceholder_length_short "></span></div><div class="ProductCard-VisibleOnHover"></div></div></button><div class="ProductCard-AdditionalContent"></div></li><li class="ProductCard ProductCard_layout_grid "><button class="ProductCard-Link "><div class="ProductCard-LinkInnerWrapper"><div class="ProductCard-FigureReview"><figure class="ProductCard-Figure"><div class="ProductLabels"></div><div class="Image Image_ratio_custom Image_imageStatus_image_not_specified Image_isPlaceholder ProductCard-Picture   Image-WidthFull Image-HeightFull"></div><img alt="undefined - " src="" loading="lazy" style="display: none;"></figure></div><div class="ProductCard-Content"><p class="ProductCard-Name"><span class="TextPlaceholder TextPlaceholder_length_medium "></span></p><span class="TextPlaceholder TextPlaceholder_length_short "></span></div><div class="ProductCard-VisibleOnHover"></div></div></button><div class="ProductCard-AdditionalContent"></div></li><li class="ProductCard ProductCard_layout_grid "><button class="ProductCard-Link "><div class="ProductCard-LinkInnerWrapper"><div class="ProductCard-FigureReview"><figure class="ProductCard-Figure"><div class="ProductLabels"></div><div class="Image Image_ratio_custom Image_imageStatus_image_not_specified Image_isPlaceholder ProductCard-Picture   Image-WidthFull Image-HeightFull"></div><img alt="undefined - " src="" loading="lazy" style="display: none;"></figure></div><div class="ProductCard-Content"><p class="ProductCard-Name"><span class="TextPlaceholder TextPlaceholder_length_medium "></span></p><span class="TextPlaceholder TextPlaceholder_length_short "></span></div><div class="ProductCard-VisibleOnHover"></div></div></button><div class="ProductCard-AdditionalContent"></div></li><li class="ProductCard ProductCard_layout_grid "><button class="ProductCard-Link "><div class="ProductCard-LinkInnerWrapper"><div class="ProductCard-FigureReview"><figure class="ProductCard-Figure"><div class="ProductLabels"></div><div class="Image Image_ratio_custom Image_imageStatus_image_not_specified Image_isPlaceholder ProductCard-Picture   Image-WidthFull Image-HeightFull"></div><img alt="undefined - " src="" loading="lazy" style="display: none;"></figure></div><div class="ProductCard-Content"><p class="ProductCard-Name"><span class="TextPlaceholder TextPlaceholder_length_medium "></span></p><span class="TextPlaceholder TextPlaceholder_length_short "></span></div><div class="ProductCard-VisibleOnHover"></div></div></button><div class="ProductCard-AdditionalContent"></div></li><li class="ProductCard ProductCard_layout_grid "><button class="ProductCard-Link "><div class="ProductCard-LinkInnerWrapper"><div class="ProductCard-FigureReview"><figure class="ProductCard-Figure"><div class="ProductLabels"></div><div class="Image Image_ratio_custom Image_imageStatus_image_not_specified Image_isPlaceholder ProductCard-Picture   Image-WidthFull Image-HeightFull"></div><img alt="undefined - " src="" loading="lazy" style="display: none;"></figure></div><div class="ProductCard-Content"><p class="ProductCard-Name"><span class="TextPlaceholder TextPlaceholder_length_medium "></span></p><span class="TextPlaceholder TextPlaceholder_length_short "></span></div><div class="ProductCard-VisibleOnHover"></div></div></button><div class="ProductCard-AdditionalContent"></div></li><li class="ProductCard ProductCard_layout_grid "><button class="ProductCard-Link "><div class="ProductCard-LinkInnerWrapper"><div class="ProductCard-FigureReview"><figure class="ProductCard-Figure"><div class="ProductLabels"></div><div class="Image Image_ratio_custom Image_imageStatus_image_not_specified Image_isPlaceholder ProductCard-Picture   Image-WidthFull Image-HeightFull"></div><img alt="undefined - " src="" loading="lazy" style="display: none;"></figure></div><div class="ProductCard-Content"><p class="ProductCard-Name"><span class="TextPlaceholder TextPlaceholder_length_medium "></span></p><span class="TextPlaceholder TextPlaceholder_length_short "></span></div><div class="ProductCard-VisibleOnHover"></div></div></button><div class="ProductCard-AdditionalContent"></div></li><li class="ProductCard ProductCard_layout_grid "><button class="ProductCard-Link "><div class="ProductCard-LinkInnerWrapper"><div class="ProductCard-FigureReview"><figure class="ProductCard-Figure"><div class="ProductLabels"></div><div class="Image Image_ratio_custom Image_imageStatus_image_not_specified Image_isPlaceholder ProductCard-Picture   Image-WidthFull Image-HeightFull"></div><img alt="undefined - " src="" loading="lazy" style="display: none;"></figure></div><div class="ProductCard-Content"><p class="ProductCard-Name"><span class="TextPlaceholder TextPlaceholder_length_medium "></span></p><span class="TextPlaceholder TextPlaceholder_length_short "></span></div><div class="ProductCard-VisibleOnHover"></div></div></button><div class="ProductCard-AdditionalContent"></div></li>`
                            
                            // Create loader
                            let loader = document.createElement('div');
                            loader.className = 'Loader Loading';
                            loader.innerHTML = '<div class="Loader-Scale "><div class="Loader-Main"><span></span></div></div>';
                            document.querySelector('.CategoryFilterOverlay-Wrapper').appendChild(loader);
                        }
                    }, 100);
                }
            });

            // If bundle builder is closed
            mutation.removedNodes.forEach(node => {
                if (node.matches && node.matches('.Popup-Content')) {
                    // Reset layoutWrapper variable
                    layoutWrapper = undefined;

                    // Reset pagination to default
                    togglePagination(true);
                }
            });
        }
    });
});

// Run the observer
observer.observe(document.body, { childList: true, subtree: true });

function searchFunctionality(searchBar) {
    // Searchbar styling
    searchBar.placeholder = 'SKU';
    searchBar.className = 'SearchField-Input SearchField-Input_isActive';
    searchBar.style.width = '50%';

    // When enter is pressed inside searchbar
    searchBar.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            // Toggle loading animation
            loading(true);

            // Remove pagination
            togglePagination(false);

            // Return to page 1 if possible
            resetPage().then(() => {
                // If query is empty do not submit
                if (searchBar.value !== '') {
                    console.log(searchBar.value);
                    // Then submit query
                    submit(searchBar.value);
                }
                else {
                    loading(false);
                    togglePagination(true);
                }
            });

            // Unselect searchbar
            searchBar.blur();
        }
    });
}

function resetPage() {
    return new Promise((resolve) => {
        let popupContent = document.querySelector('.Popup-Content');

        // Wait for pagination to load before clicking back button
        let interval = setInterval(() => {
            let pagination = popupContent.querySelector('.Pagination');

            // If pagination is loaded
            if (!pagination.classList.contains('Pagination_isLoading')) {
                // Try to click back button
                try {
                    let prevBtn = popupContent.querySelector('.PaginationLink_isArrow[aria-label="Previous page"]');
                    prevBtn.click();
                }
                // If back button is not clickable, clear interval and resolve promise
                catch (error) {
                    clearInterval(interval);
                    resolve();
                }
            }
        }, 100);
    })
}

function submit(query) {
    let popupContent = document.querySelector('.Popup-Content');

    // Wait for products to load before parsing data
    let interval = setInterval(() => {
        let image = popupContent.querySelector('.ProductListPage:not(.Loading)').querySelector('.ProductCard').querySelector('.Image');

        // If products are loaded clear interval
        if (image.classList.contains('Image_imageStatus_image_loaded')) {
            clearInterval(interval);

            // Wait for until parsing is done before checking if product was found
            parseProducts(popupContent, query).then(productFound => {
                // If no product was found, go to the next page and begin parsing again
                if (!productFound) {
                    try {
                        let nextBtn = popupContent.querySelector('.PaginationLink_isArrow[aria-label="Next page"]');
                        nextBtn.click();
                        submit(query);
                    }
                    // If there are no more pages and product was not found, log "No results"
                    catch (error) {
                        console.log('No results');
                        loading(false);
                    }
                }
                else {
                    loading(false);
                }
            });
        }
    }, 100);

}

function parseProducts(popupContent, query) {
    return new Promise((resolve) => {
        let productFound = false;
        // Select all products on the page
        let itemList = popupContent.querySelector('.ProductListPage:not(.Loading)').querySelectorAll('.ProductCard');

        // For each product
        itemList.forEach(item => {
            // Get the SKU number from the img source
            let sku = item.querySelector('.ProductCard-Picture').firstChild.getAttribute('src').slice(36, 42);

            // If the SKU number of the product does not match the search query, hide it from the results
            if (query !== sku) {
                item.style.display = 'none';
            }
            else {
                productFound = true;
                console.log('Found '+ sku);
            }
        });

        // Resolve the promise after checking all products
        resolve(productFound);
    });
}

function loading(isLoading) {

    if (isLoading) {
        styleTag.textContent = `
            .ProductListPage {
                display: none !important;
            }
            .ProductListPage.Loading {
                display: grid !important;
            }
            .Loader {
                display: none !important
            }
            .Loader.Loading {
                display: block !important
            }
        `
    }
    else {
        styleTag.textContent = `
            .ProductListPage {
                display: grid !important;
            }
            .ProductListPage.Loading {
                display: none !important;
            }
            .Loader {
                display: block !important
            }
            .Loader.Loading {
                display: none !important
            }
        `
    }
}

function togglePagination(isToggled) {
    if (isToggled) {
        paginationStyle.textContent = `
            .Pagination {
                display: flex !important;
            }
        `
    }
    else {
        paginationStyle.textContent = `
            .Pagination {
                display: none !important;
            }
        `
    }
}