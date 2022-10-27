<template>
      <li>
                <a href="#" class="peer nav-menu-m"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                        viewBox="0 0 21 20.989">
                        <path id="Icon_material-widgets" data-name="Icon material-widgets"
                            d="M15.37,14.828v8.7h8.7v-8.7ZM4.5,23.524h8.7v-8.7H4.5Zm0-19.565v8.7h8.7v-8.7ZM19.348,2.535,13.2,8.676l6.152,6.152L25.5,8.676Z"
                            transform="translate(-4.5 -2.535)" fill="" />
                    </svg>
                    {{$t('manage_widgets')}}</a>
                <!-- the menu here -->
                <div class="hidden peer-focus:flex hover:flex flex-col bg-blue-600 drop-shadow-lg z-50">
                    <a class="px-5 py-2 text-white border-b border-dashed hover:bg-blue-500"
                        href="/template">Template</a>
                    <a class="px-5 py-2 text-white border-b border-dashed hover:bg-blue-500"
                        href="/template/group">Group Template</a>
                    <a class="px-5 py-2 text-white border-b border-dashed hover:bg-blue-500" href="/template/user">User
                        Template</a>
                    <a class="px-5 py-2 text-white border-b border-dashed hover:bg-blue-500"
                        href="/widgets/list">Widgets Devices List</a>
                    <a class="px-5 py-2 text-white border-b border-dashed hover:bg-blue-500"
                        href="/widgets/cate">Widgets Category</a>
                </div>
            </li>
</template>