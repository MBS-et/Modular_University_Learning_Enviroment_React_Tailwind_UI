/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      //extending text color
      textColor: {
        // text-colors-for-table-light
        table_Light: {
          card: "var(--color-Table-card)",
          add_btn: "var(--color-Btn-add)",
          add_btn_hover: "var(--color-Btn-add-hover)",
          header: "var(--color-Table-header)",
          row_hover: "var(--color-Table-row-hover)",
          filter_btn: "var(--color-Btn-filter)",
          data_text: "var(--color-table-Data-Text)",
          text_color: "var(--color-Table-text)",
          btn: "var(--color-Table-btn)",
          action_icon: "var(--color-Table-action-icon)",
          deselected_border: "var(--color-Table-deselected-border )",
          selected: "var( --color-Table-selected )",
          tab_active: "var(--color-Table-Tab-Active )",
          tab_Deactivated: "var( --color-Table-Tab-Deactivated)",
        },
        //text-colors-for-table-light

        // text-colors-for-table-dark

        table_Dark: {
          card: "var(--color-Table-Dark-card)",
          data_text: "var( --color-table-Dark-Data-Text)",
          row_hover: "var( --color-Table-Dark-row-hover)",
        },
        // text-colors-for-table-dark

        // text-colors-for-login-page
        login: {
          btn_hover: "var(--color-btn-hover)",
          btn_main: "var(--color-btn-main)",
          higlighted_text: "var(--color-txt-highlited)",
          primary_text: "var(--color-txt-primary)",
          btn_secondary_main: "var(--color-btn-secondary-main)",
          btn_secondary_hover: "var(--color-btn-secondary-hover)",
        },
        // text-colors-for-login-page

        // text-colors-for-Navigation-Bar-light
        navigation_light: {
          primary_text: "var(--color-Nav-Bar-text-primary)",
          muted_text: "var(--color-Nav-Bar-text-Muted)",
        },
        // text-colors-for-Navigation-Bar-light

        // text-colors-for-Nav-BarUser-Profiles light
        userProfile: {
          header_text: "var(--color-header-text-user-prof)",
          muted_text: "var(--color-header-user-prof-text-Muted)",
          toggle_btn_primary_off: "var( --color-Toggle-btn-primary-OFF)",
          toggle_btn_primary_on: "var( --color-Toggle-btn-primary-ON)",
        },
        // text-colors-for-Nav-BarUser-Profiles light

        // text-colors-for-Navigation-Bar-dark
        navigation_dark: {
          primary_text: "var(--color-Nav-Bar-text-primary-dark)",
          muted_text: "var(--color-Nav-Bar-text-Muted-dark)",
        },
        // text-colors-for-Navigation-Bar-dark

        // text-colors-for-sidebar-Bar-light
        sideBar_light: {
          muted_text: "var(--color-side-bar-text-muted)",
          primary_text: "var(--color-side-bar-text-primary)",
          primary_text_hover: "var(--color-side-bar-text-primary-hover)",
          link_focus: "var(--color-Side-bar-link-focus)",
          link_active_clicked: "var(--color-Side-bar-link-active-clicked)",
        },
        // text-colors-for-sidebar-Bar-light

        // text-colors-for-sidebar-Bar-dark
        sideBar_Dark: {
          muted_text: "var( --color-side-bar-text-muted-dark)",
          primary_text: "var( --color-side-bar-text-primary-dark)",
          primary_text_hover: "var( --color-side-bar-text-primary-hover-dark)",
          link_focus: "var--color-Side-bar-link-focus-dark)",
          link_active_clicked:
            "var( --color-Side-bar-link-active-clicked-dark)",
        },
        // text-colors-for-form-light
        form_light: {
          input_field_focus: "var( --color-input-field-focus)",
          form_btn_save_primary: "var( --color-btn-form-save-primary)",
          form_btn_save_hover: "var(  --color-btn-form-save-hover)",
          form_btn_add_primary: "var( --color-btn-form-add-primary)",
          form_btn_add_primary_hover:
            "var( --color-btn-form-add-primary-hover)",
        },
        // text-colors-for-form-light

        // text-colors-for-form-dark
        form_Dark: {
          input_field_focus: "var(  --color-input-field-focus-dark)",
          form_btn_save_primary: "var(  --color-btn-form-save-primary-dark)",
          form_btn_save_hover: "var(  --color-btn-form-save-hover-dark)",
          form_btn_add_primary: "var( --color-btn-form-add-primary-dark)",
          form_btn_add_primary_hover:
            "var( --color-btn-form-add-primary-hover-dark)",
        },
        // text-colors-for-form-dark
      },

      //extending background color

      backgroundColor: {
        //bg-colors-for-table-light
        table_Light: {
          action_btn_hover: "var(--color-Table-action-btn-bg-hover)",
          action_btn: "var(--color-Table-action-btn-bg)",
        },
        //bg-colors-for-login page
        login: {
          notification: "var(--color-notification-bg)",
          input_field: "var( --color-input-field-bg-color)",
        },
        //bg-colors-for-navbar-light
        navigation_light: {
          nav_bar_bg: "var( --color-Nav-Bar-Bg)",
          container: "var(--color-Nav-Bar-container-bg)",
          setting_button_primary:
            "var( --color-Nav-app-setting-button-bg-primary)",
          setting_button_primary_hover:
            "var( --color-Nav-app-setting-button-bg-hover)",
        },
        //bg-colors-for-navbar-light

        //bg-colors-for-navbar-dark
        navigation_dark: {
          nav_bar_bg: "var(--color-Nav-Bar-Bg-dark)",
          container: "var(--color-Nav-Bar-container-bg-dark)",
        },
        //bg-colors-for-sidebar-light
        sideBar_light: {
          container: "var( --color-side-bar-container-bg)",
        },
        //bg-colors-for-sidebar-dark
        sideBar_Dark: {
          container: "var(--color-side-bar-container-bg-dark)",
        },
      },
    },
  },
  plugins: [],
};
